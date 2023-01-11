import Link from './Link';
import { ActionIcon, createStyles, DefaultProps } from '@mantine/core';
import { defaultTransition } from '@lib/theme/main';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

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
    icon:
      | React.ReactNode
      | IconProps
      | ((params: IconLinkStylesParams) => JSX.Element);
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

    return {
      root: {
        color: colors[active ? 'active' : 'default'],
        transition: defaultTransition,
        '&:hover': {
          color: colors.hover,
        },
        '&:active': {
          color: colors.active,
        },
        '& svg': {
          height: '1em',
          maxHeight: '100%',
          width: 'auto',
          fill: 'currentColor',
          transition: defaultTransition,
        },
      },
      wrapper: {},
    };
  }
);

const IconLink = ({
  icon,
  color,
  hoverColor,
  activeColor,
  active,
  styles,
  unstyled,
  className,
  classNames,
  title,
  ...props
}: IconLinkProps) => {
  const stylesParams = { color, hoverColor, activeColor, active };
  const { classes, cx, theme } = useStyles(stylesParams, {
    name: 'IconLink',
    classNames,
    styles,
    unstyled,
  });

  const Icon = () => {
    return typeof icon === 'function' ? (
      icon(stylesParams)
    ) : icon && typeof icon === 'object' && 'src' in icon ? (
      <ReactSVG className={classes.wrapper} {...icon} />
    ) : (
      <>icon</>
    );
  };

  return (
    <ActionIcon
      variant="transparent"
      component={Link}
      className={cx(classes.root, className)}
      {...props}
    >
      <Icon />
    </ActionIcon>
  );
};

const defaultProps: Partial<IconLinkProps> = {
  color: 'black',
  hoverColor: 'red',
  activeColor: 'blue',
  activeShade: 2,
  baseShade: 9,
  variant: 'transparent',
};

IconLink.defaultProps = defaultProps;

export default IconLink;
