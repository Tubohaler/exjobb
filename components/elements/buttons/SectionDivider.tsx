import useExtendedTheme from '@hooks/useExtendedTheme';
import { PageSectionDividerFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';
import { createStyles, DefaultProps, Selectors } from '@mantine/core';
import { ExtendedTheme } from 'context/ExtendedTheme.context';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import SvgIconLink, { SvgIconLinkProps } from '../links/SvgIconLink';

export type SectionDividerStylesNames = Selectors<typeof useStyles>;
export type SectionDividerStylesParams = {
  direction?: 'up' | 'down';
  size?: PageSectionDividerFragment['size'];
  rotate?: PageSectionDividerFragment['rotate'];
  extended: ExtendedTheme;
};

const useStyles = createStyles(
  (
    theme,
    { direction = 'down', size, rotate, extended }: SectionDividerStylesParams
  ) => ({
    root: {
      fontSize: size || theme.fontSizes.xl * 6,
      color: theme.fn.primaryColor(),
      transition: createTransition(
        !rotate ? ['color'] : ['color', 'transform'],
        0.2
      ),
      transform: !rotate || direction !== 'up' ? 'none' : 'rotate(180deg)',
      '&:hover': {
        color: extended.fn.activeColor(),
      },
    },
  })
);

export type SectionDividerProps = Omit<
  DefaultProps<SectionDividerStylesNames, SectionDividerStylesParams>,
  'onClick'
> &
  Omit<SvgIconLinkProps, 'onClick' | 'href' | 'src'> & {
    divider: PageSectionDividerFragment;
    getTargetId?: (direction: 'up' | 'down') => string;
    onClick?: (direction: 'up' | 'down') => unknown;
  };

const SectionDivider = ({
  divider: { size, rotate, icon },
  getTargetId,
  className,
  classNames,
  styles,
  unstyled,
  onClick,
  ...props
}: SectionDividerProps) => {
  const [observerSupport, setObserverSupport] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const linkRef = useRef<HTMLAnchorElement>(null);
  const extended = useExtendedTheme();
  const { classes, cx } = useStyles(
    { direction, size, rotate, extended },
    { name: 'SectionDivider', classNames, styles, unstyled }
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    if (!observerSupport) return;
    ev.preventDefault();
    if (onClick) onClick(direction);
  };

  useEffect(() => {
    if (!observerSupport || !linkRef.current) return;

    const marginTop = 0.3;
    const marginBottom = 0.3;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.rootBounds) return;
        const { top, height } = entry.boundingClientRect;
        const viewHeight =
          entry.rootBounds.height *
          (marginTop + marginBottom <= 0 ? 1 : 1 / (marginTop + marginBottom));
        const direction =
          viewHeight * (0.5 + marginTop - marginBottom) > top + height * 0.5
            ? 'up'
            : 'down';
        setDirection(direction);
      },
      {
        root: window.document,
        rootMargin: `-${marginTop * 100}% 0% -${marginBottom * 100}% 0%`,
        threshold: [0, 1],
      }
    );

    observer.observe(linkRef.current);
    return () => {
      observer.disconnect();
    };
  }, [observerSupport]);

  useEffect(() => {
    setObserverSupport('IntersectionObserver' in window);
  }, []);

  return (
    <SvgIconLink
      ref={linkRef}
      src={icon.url}
      className={cx(classes.root, className)}
      href={!getTargetId ? '#' : getTargetId(direction)}
      onClick={handleClick}
      {...props}
    />
  );
};

export default SectionDivider;
