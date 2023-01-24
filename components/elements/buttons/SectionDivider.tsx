import useDidMount from '@hooks/useDidMount';
import { IconFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';
import { createStyles, DefaultProps, Selectors } from '@mantine/core';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import SvgIconLink, { SvgIconLinkProps } from '../links/SvgIconLink';

export type SectionDividerStylesNames = Selectors<typeof useStyles>;
export type SectionDividerStylesParams = { direction?: 'up' | 'down' };

const useStyles = createStyles(
  (theme, { direction = 'down' }: SectionDividerStylesParams) => ({
    root: {
      color: theme.colors.blue[2],
      transition: createTransition(['color', 'transform'], 0.33),
      transform: direction === 'up' ? 'rotate(180deg)' : 'rotate(0)',
      '&:hover': {
        color: theme.colors.red[2],
      },
    },
  })
);

export type SectionDividerProps = Omit<
  DefaultProps<SectionDividerStylesNames, SectionDividerStylesParams>,
  'onClick'
> &
  Omit<SvgIconLinkProps, 'onClick' | 'href' | 'src'> & {
    icon: IconFragment;
    getTargetId?: (direction: 'up' | 'down') => string;
    onClick?: (direction: 'up' | 'down') => unknown;
  };

const SectionDivider = ({
  icon,
  getTargetId,
  className,
  classNames,
  styles,
  unstyled,
  onClick,
  ...props
}: SectionDividerProps) => {
  const didMount = useDidMount();
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { classes, cx } = useStyles(
    { direction },
    { name: 'SectionDivider', classNames, styles, unstyled }
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    ev.preventDefault();
    if (onClick) onClick(direction);
  };

  useEffect(() => {
    if (!didMount || !('IntersectionObserver' in window) || !linkRef.current) {
      return;
    }

    const marginTop = 0.3;
    const marginBottom = 0.25;

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
        threshold: [0.25, 0.5, 0.75],
      }
    );

    observer.observe(linkRef.current);
    return () => {
      observer.disconnect();
    };
  }, [didMount]);

  return (
    <SvgIconLink
      ref={linkRef}
      src={icon.url}
      className={cx(classes.root, className)}
      href={!getTargetId ? '#' : getTargetId(direction)}
      onClick={handleClick}
      hoverColor="red"
      color="blue"
      hoverShade={2}
      baseShade={2}
      {...props}
    />
  );
};

export default SectionDivider;
