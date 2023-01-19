import { Selectors, createStyles } from '@mantine/core';
import Link, { LinkProps } from './Link';

export type NavLinkProps = LinkProps & {
  active?: boolean;
};

export type NavLinkStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => {
  const margin = 0.5;
  return {
    root: {
      color: theme.black,
      textTransform: 'capitalize',
      margin: `0 ${margin}em`,
      '&:not(:last-of-type):after': {
        pointerEvents: 'none',
        content: '"/"',
        position: 'relative',
        color: theme.black,
        right: `-${margin}em`,
      },
      '&:first-of-type': {
        marginLeft: 0,
      },
      '&:last-of-type': {
        marginRight: 0,
      },
    },
    active: {
      color: theme.colors.blue[2],
    },
  };
});

const NavLink = ({
  className,
  classNames,
  styles,
  active,
  ...props
}: NavLinkProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'NavLink',
    classNames,
    styles,
  });
  return (
    <Link
      className={cx(classes.root, active && classes.active, className)}
      {...props}
    />
  );
};

export default NavLink;
