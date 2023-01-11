import Link from './Link';
import {
  ActionIcon,
  createStyles,
  CSSObject,
  DefaultProps,
} from '@mantine/core';
import { defaultTransition } from '@lib/theme/main';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';
import { SvgIconFragment } from '@lib/dato-cms';
import { isSvgIconFragment } from '@lib/dato-cms/typeGuard';

export type IconLinkStylesNames = 'root' | 'wrapper';
export type IconLinkStylesParams = {
  color?: string;
  hoverColor?: string;
  activeColor?: string;
  active?: boolean;
  baseShade?: number;
  activeShade?: number;
};

export type IconProps = ({ src: string } | (SvgIconFragment & {})) & {
  fallback?: ReactSVGProps['fallback'];
};

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
      get default() {
        return !color ? 'inherit' : getColor(color, shades.base);
      },
      get hover() {
        return !hoverColor ? 'initial' : getColor(hoverColor, shades.active);
      },
      get active() {
        return !activeColor ? this.hover : getColor(activeColor, shades.active);
      },
    };

    const wrapperStyles: CSSObject = {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      color: 'inherit',
    };

    const styles: Record<IconLinkStylesNames, CSSObject> = {
      root: {
        color: active ? colors.active : colors.default,
        transition: defaultTransition,
        lineHeight: 1,
        '&:hover': {
          color: colors.hover,
        },
        '&:active': {
          color: colors.active,
        },
        '& a': {
          color: 'inherit',
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
    console.log(styles);
    return styles;
  }
);

const Icon = ({
  icon,
  className,
}: Pick<IconLinkProps, 'icon' | 'className'>) => {
  if (isSvgIconFragment(icon)) {
    return (
      <ReactSVG
        className={className}
        src={icon.inlineHTML || icon.url}
        fallback={
          (icon as SvgIconFragment & { fallback?: IconProps['fallback'] })
            .fallback
        }
      />
    );
  }
  if (icon && typeof icon === 'object' && 'src' in icon) {
    return <ReactSVG className={className} {...icon} />;
  }

  return <>{icon}</>;
};

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
  console.log(active);
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

  return (
    <ActionIcon
      component={Link}
      className={cx(classes.root, className)}
      variant={variant}
      {...props}
    >
      <Icon icon={icon} className={classes.wrapper} />
    </ActionIcon>
  );
};

export default IconLink;
