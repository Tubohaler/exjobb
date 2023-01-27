import { PageSectionDividerFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';
import { createStyles, DefaultProps, Selectors } from '@mantine/core';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import SvgIconLink, { SvgIconLinkProps } from '../links/SvgIconLink';

export type SectionDividerStylesNames = Selectors<typeof useStyles>;
export type SectionDividerStylesParams = {
  direction?: 'up' | 'down';
  size?: PageSectionDividerFragment['size'];
  rotate?: PageSectionDividerFragment['rotate'];
};

export type SectionDividerProps = Omit<
  DefaultProps<SectionDividerStylesNames, SectionDividerStylesParams>,
  'onClick'
> &
  Omit<SvgIconLinkProps, 'onClick' | 'href' | 'src'> & {
    divider: PageSectionDividerFragment;
    getTargetId: (direction: 'up' | 'down') => string;
    headerHeight?: number;
  };

const useStyles = createStyles(
  (
    theme,
    { direction = 'down', size, rotate }: SectionDividerStylesParams
  ) => ({
    root: {
      fontSize: `min(${size || theme.fontSizes.xl * 6}px, min(30vh, 30vw))`,
      color: theme.colors.blue[2],
      transition: createTransition(
        !rotate ? ['color'] : ['color', 'transform'],
        0.2
      ),
      transform: !rotate || direction !== 'up' ? 'none' : 'rotate(180deg)',
      '&:hover': {
        color: theme.colors.red[2],
      },
    },
  })
);

const SectionDivider = ({
  divider: { size, rotate, icon },
  getTargetId,
  className,
  classNames,
  styles,
  unstyled,
  headerHeight,
  ...props
}: SectionDividerProps) => {
  const [observerSupport, setObserverSupport] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const linkRef = useRef<HTMLAnchorElement>(null);
  const { classes, cx } = useStyles(
    { direction, size, rotate },
    { name: 'SectionDivider', classNames, styles, unstyled }
  );

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (ev) => {
    if (!observerSupport) return;
    ev.preventDefault();
    document
      .querySelector(getTargetId(direction))
      ?.scrollIntoView({ behavior: 'smooth' });

    // Previous code, it's intention was to scroll to top of target and ignore
    // padding
    //
    //   const rect = document
    //     .querySelector(getTargetId(direction))
    //     ?.getBoundingClientRect();
    //   if (!rect) return;
    //   window.scrollTo({
    //     top: rect.top - headerHeight,
    //     behavior: 'smooth',
    //   });
  };

  useEffect(() => {
    if (!observerSupport || !linkRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.rootBounds) return;
        const { top } = entry.boundingClientRect;

        const direction =
          (entry.rootBounds.height - (headerHeight || 0)) * 0.5 >
          top - (headerHeight || 0)
            ? 'up'
            : 'down';
        setDirection(direction);
      },
      {
        rootMargin: '-25% 0% -25% 0%',
        threshold: [0, 0.25, 0.75, 1],
      }
    );

    observer.observe(linkRef.current);
    return () => {
      observer.disconnect();
    };
  }, [observerSupport, headerHeight, size]);

  useEffect(() => {
    setObserverSupport('IntersectionObserver' in window);
  }, [headerHeight]);

  return (
    <SvgIconLink
      ref={linkRef}
      src={icon.url}
      className={cx(classes.root, className)}
      href={!getTargetId ? '#' : getTargetId(direction) || '#'}
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
