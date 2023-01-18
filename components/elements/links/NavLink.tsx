import { Selectors, createStyles } from '@mantine/core';
import Link, { LinkProps } from './Link';

export type NavLinkProps = LinkProps & {
  active?: boolean;
};

export type NavLinkStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
    textTransform: 'capitalize',
    '&:not(:last-of-type):after': {
      pointerEvents: 'none',
      content: '"/"',
      position: 'relative',
      color: theme.black,
      right: '-5px',
    },
  },
  active: {
    color: theme.colors.blue[2],
  },
}));

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
