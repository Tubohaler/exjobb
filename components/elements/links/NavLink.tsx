import { Selectors, createStyles } from '@mantine/core';
import Link, { LinkProps } from './Link';

export type NavLinkProps = LinkProps & {
  active?: boolean;
};

export type NavLinkStylesNames = Selectors<typeof useStyles>;
export type NavLinkStylesParams = { active?: boolean };

const useStyles = createStyles((theme, { active }: NavLinkStylesParams) => {
  return {
    root: {
      display: 'inline',
      lineHeight: 1,
      padding: 0,
      margin: 0,
      color: !active ? 'inherit' : theme.fn.primaryColor(),
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      borderBottomColor: !active ? 'transparent' : 'inherit',
      position: 'relative',
      textTransform: 'capitalize',
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
  const { classes, cx } = useStyles(
    { active },
    {
      name: 'NavLink',
      classNames,
      styles,
    }
  );
  return <Link className={cx(classes.root, className)} {...props} />;
};

export default NavLink;
