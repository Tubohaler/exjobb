import Link from './Link';
import {
  ActionIcon,
  createStyles,
  CSSObject,
  DefaultProps,
  MantineNumberSize,
} from '@mantine/core';
import { defaultTransition } from '@lib/theme/main';

import SvgIcon, { SvgIconProps } from '../SvgIcon';

export type IconLinkStylesNames = 'root' | 'wrapper' | 'svg';
export type IconLinkStylesParams = {
  color?: string;
  baseShade?: number;
  hoverColor?: string;
  hoverShade?: number;
  size?: MantineNumberSize;
};

export type IconLinkProps = DefaultProps<
  IconLinkStylesNames,
  IconLinkStylesParams
> &
  Parameters<typeof ActionIcon<typeof Link>>[0] &
  IconLinkStylesParams &
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
    }: IconLinkStylesParams
  ) => {
    const getColor = (color: string, shade?: number) => {
      return color === 'black' || color === 'white'
        ? theme[color]
        : color in theme.colors
        ? theme.colors[color][shade || theme.fn.primaryShade()]
        : color;
    };

    const styles: Record<IconLinkStylesNames, CSSObject> = {
      root: {
        fontSize:
          typeof size === 'number'
            ? size
            : typeof size === 'string' && size in theme.fontSizes
            ? theme.fontSizes[size]
            : 'inherit',
        color: !color ? 'inherit' : getColor(color, baseShade),
        transition: defaultTransition,
        lineHeight: 1,
        '&:hover': {
          color: !hoverColor ? 'inherit' : getColor(hoverColor, hoverShade),
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
      svg: {
        height: '1em',
        maxHeight: '100%',
        width: 'auto',
        fill: 'currentColor',
        transition: defaultTransition,
        pointerEvents: 'none',
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
  size = 'md',
  color = 'black',
  hoverColor = 'red',
  baseShade = 9,
  hoverShade = 2,
  variant = 'transparent',
  ...props
}: IconLinkProps) => {
  const { classes, cx } = useStyles(
    {
      size,
      color,
      baseShade,
      hoverColor,
      hoverShade,
    },
    {
      name: 'IconLink',
      classNames,
      styles,
      unstyled,
    }
  );

  return (
    <ActionIcon
      component={Link}
      className={cx(classes.root, className)}
      variant={variant}
      {...props}
    >
      <SvgIcon
        icon={icon}
        className={classes.wrapper}
        svgClassName={classes.svg}
        fallback={fallback}
      />
    </ActionIcon>
  );
};

export default SvgIconLink;
