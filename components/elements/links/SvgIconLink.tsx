import Link from './Link';
import {
  ActionIcon,
  Box,
  createStyles,
  CSSObject,
  DefaultProps,
  MantineNumberSize,
  Selectors,
} from '@mantine/core';
import { defaultTransition } from '@lib/theme/main';

import SvgIcon, { SvgIconProps } from '../SvgIcon';
import { useRef } from 'react';
import { createTransition } from '@lib/theme/utils';

export type SvgIconLinkStylesNames = Selectors<typeof useStyles>;
export type SvgIconLinkStylesParams = {
  color?: string;
  baseShade?: number;
  hoverColor?: string;
  hoverShade?: number;
  size?: MantineNumberSize;
};

export type SvgIconLinkProps = DefaultProps<
  SvgIconLinkStylesNames,
  SvgIconLinkStylesParams
> &
  Parameters<typeof ActionIcon<typeof Link>>[0] &
  SvgIconLinkStylesParams &
  Pick<SvgIconProps, 'icon' | 'fallback'>;

const useStyles = createStyles(
  (
    theme,
    {
      size,
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
        fontSize:
          typeof size === 'number'
            ? size
            : typeof size === 'string' && size in theme.fontSizes
            ? theme.fontSizes[size]
            : 'inherit',
        color: !color ? 'inherit' : getColor(color, baseShade),
        outline: 'none',
        transition: createTransition(['color', 'opacity']),
        lineHeight: 1,
        opacity: 0.75,
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
        fontSize: 'inherit',
      },
    };
    return styles;
  }
);

const SvgIconLink = ({
  icon,
  styles,
  unstyled,
  className,
  classNames,
  fallback,
  size,
  color,
  hoverColor,
  baseShade,
  hoverShade,
  variant,
  ...props
}: SvgIconLinkProps) => {
  const stylesParams = useRef<SvgIconLinkStylesParams>({
    size,
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
    <Box
      component={Link}
      className={cx(classes.root, className)}
      size="xs"
      {...props}
    >
      <SvgIcon icon={icon} className={classes.wrapper} fallback={fallback} />
    </Box>
  );
};

const defaultProps: Partial<Omit<SvgIconLinkProps, 'icon' | 'href'>> = {
  size: 'md',
  color: 'black',
  hoverColor: 'blue',
  baseShade: 9,
  hoverShade: 2,
  variant: 'transparent',
};

SvgIconLink.defaultProps = defaultProps;

export default SvgIconLink;
