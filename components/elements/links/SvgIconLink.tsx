import { forwardRef } from 'react';
import Link from './Link';
import {
  ActionIcon,
  Box,
  createStyles,
  CSSObject,
  DefaultProps,
  Selectors,
} from '@mantine/core';

import SvgIcon, { SvgIconProps } from '../SvgIcon';
import { useRef } from 'react';
import { createTransition } from '@lib/theme/utils';

export type SvgIconLinkStylesNames = Selectors<typeof useStyles>;
export type SvgIconLinkStylesParams = {
  color?: string;
  baseShade?: number;
  hoverColor?: string;
  hoverShade?: number;
};

export type SvgIconLinkProps = DefaultProps<
  SvgIconLinkStylesNames,
  SvgIconLinkStylesParams
> &
  Parameters<typeof Link>[0] &
  SvgIconLinkStylesParams &
  Pick<SvgIconProps, 'src' | 'fallback'>;

const useStyles = createStyles(
  (
    theme,
    {
      color = 'black',
      hoverColor = 'red',
      baseShade = 9,
      hoverShade = 2,
    }: SvgIconLinkStylesParams
  ) => {
    const getColor = (color: string, shade?: number) => {
      return color === 'black' || color === 'white'
        ? theme[color]
        : color in theme.colors
        ? theme.colors[color][shade || theme.fn.primaryShade()]
        : color;
    };

    const styles: Record<'root' | 'wrapper', CSSObject> = {
      root: {
        display: 'inline-block',
        color: !color ? 'inherit' : getColor(color, baseShade),
        outline: 'none',
        transition: createTransition(['color', 'opacity']),
        lineHeight: 1,
        '&:hover': {
          color: !hoverColor ? 'inherit' : getColor(hoverColor, hoverShade),
          opacity: 1,
        },
      },
      wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        color: 'inherit',
      },
    };
    return styles;
  }
);

const SvgIconLink = forwardRef<HTMLAnchorElement, SvgIconLinkProps>(
  (
    {
      src,
      styles,
      unstyled,
      className,
      classNames,
      fallback,
      color,
      hoverColor,
      baseShade,
      hoverShade,
      variant,
      ...props
    },
    ref
  ) => {
    const stylesParams = useRef<SvgIconLinkStylesParams>({
      color,
      baseShade,
      hoverColor,
      hoverShade,
    });
    const { classes, cx } = useStyles(stylesParams.current, {
      name: 'IconLink',
      classNames,
      styles,
      unstyled,
    });

    return (
      <Link ref={ref} className={cx(classes.root, className)} {...props}>
        <SvgIcon src={src} className={classes.wrapper} fallback={fallback} />
      </Link>
    );
  }
);

const defaultProps: Partial<Omit<SvgIconLinkProps, 'icon' | 'href'>> = {
  color: 'black',
  hoverColor: 'blue',
  baseShade: 2,
  hoverShade: 2,
};

SvgIconLink.defaultProps = defaultProps;

export default SvgIconLink;
