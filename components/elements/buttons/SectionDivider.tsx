import useDidMount from '@hooks/useDidMount';
import { IconFragment } from '@lib/dato-cms';
import { createTransition } from '@lib/theme/utils';
import {
  ActionIcon,
  createStyles,
  DefaultProps,
  Selectors,
} from '@mantine/core';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import SvgIconLink, { SvgIconLinkProps } from '../links/SvgIconLink';

export type SectionDividerStylesNames = Selectors<typeof useStyles>;
export type SectionDividerStylesParams = { direction?: 'up' | 'down' };

const useStyles = createStyles(
  (theme, { direction = 'down' }: SectionDividerStylesParams) => ({
    root: {
      color: theme.colors.blue[2],
      transition: createTransition(['color', 'transform']),
      transform: direction === 'up' ? 'rotate(90deg)' : 'rotate(0)',
      '&:hover': {
        color: theme.colors.red[2],
      },
    },
  })
);

export type SectionDividerProps = DefaultProps<
  SectionDividerStylesNames,
  SectionDividerStylesParams
> &
  Omit<SvgIconLinkProps, 'onClick' | 'href' | 'src'> & {
    icon: IconFragment;
    getTargetId?: (direction: 'up' | 'down') => string;
    rootMargin?: IntersectionObserverInit['rootMargin'];
  };

const SectionDivider = ({
  icon,
  rootMargin = '10%',
  getTargetId,
  className,
  classNames,
  styles,
  unstyled,
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
    if (!getTargetId) return;
    document
      .querySelector(getTargetId(direction))
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!didMount || !('IntersectionObserver' in window) || !linkRef.current) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      console.log(entry);
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin,
      threshold: 1,
    });
    observer.observe(linkRef.current);
    console.log('observer.observe');
    return () => {
      console.log('observer.disconnect');
      observer.disconnect();
    };
  }, [didMount, rootMargin]);

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
