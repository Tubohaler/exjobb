import Link from './Link';
import {
  ActionIcon,
  Box,
  createStyles,
  CSSObject,
  DefaultProps,
} from '@mantine/core';
import { defaultTransition } from '@lib/theme/main';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';
import { SvgIconFragment } from '@lib/dato-cms';

export type IconLinkStylesNames = 'root' | 'wrapper';
export type IconLinkStylesParams = {
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  active?: boolean;
  baseShade?: number;
  activeShade?: number;
};

export type IconProps = { src: string; fallback?: ReactSVGProps['fallback'] };

export type IconLinkProps = DefaultProps<
  IconLinkStylesNames,
  IconLinkStylesParams
> &
  Parameters<typeof ActionIcon<typeof Link>>[0] &
  IconLinkStylesParams & {
    icon: React.ReactNode | IconProps;
  };

const useStyles = createStyles(
  (
    theme,
    {
      color,
      hoverColor,
      activeColor,
      active,
      baseShade,
      activeShade,
    }: IconLinkStylesParams
  ) => {
    const primaryShade = theme.fn.primaryShade();
    const shades = {
      base:
        typeof baseShade === 'number'
          ? Math.min(Math.max(baseShade, 0), 9)
          : primaryShade,
      active:
        typeof activeShade === 'number'
          ? Math.min(Math.max(activeShade, 0), 9)
          : primaryShade,
    };
    const getColor = (color: string, shade: number) => {
      return color === 'black' || color === 'white'
        ? theme[color]
        : color in theme.colors
        ? theme.colors[color][shade]
        : color;
    };

    const colors: Record<string, string> = {
      default: !color ? 'inherit' : getColor(color, shades.base),
      hover: !hoverColor ? 'initial' : getColor(hoverColor, shades.active),
      active: !activeColor ? 'initial' : getColor(activeColor, shades.active),
    };

    const wrapperStyles: CSSObject = {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    };

    return {
      root: {
        background: 'red',
        color: colors[active ? 'active' : 'default'],
        transition: defaultTransition,
        lineHeight: 1,
        '&:hover': {
          color: colors.hover,
        },
        '&:active': {
          color: colors.active,
        },
      },
      wrapper: {
        ...wrapperStyles,
        '& > div': wrapperStyles,
        '& svg': {
          height: '1em',
          maxHeight: '100%',
          width: 'auto',
          fill: 'currentColor',
          transition: defaultTransition,
          pointerEvents: 'none',
        },
      },
    };
  }
);

const IconLink = ({
  icon,
  active,
  styles,
  unstyled,
  className,
  classNames,
  color = 'black',
  hoverColor = 'red',
  activeColor = 'blue',
  baseShade = 9,
  activeShade = 2,
  variant = 'transparent',
  ...props
}: IconLinkProps) => {
  const { classes, cx } = useStyles(
    {
      color,
      hoverColor,
      activeColor,
      baseShade,
      activeShade,
      active,
    },
    {
      name: 'IconLink',
      classNames,
      styles,
      unstyled,
    }
  );

  const Icon = () => {
    return icon && typeof icon === 'object' && 'src' in icon ? (
      <ReactSVG className={classes.wrapper} {...icon} />
    ) : (
      <>icon</>
    );
  };

  return (
    <ActionIcon
      component={Link}
      className={cx(classes.root, className)}
      {...props}
    >
      <Icon />
    </ActionIcon>
  );
};

export default IconLink;
