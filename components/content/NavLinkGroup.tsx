import NavLink, { NavLinkProps } from '@components/elements/links/NavLink';
import { PageLinkFragment } from '@lib/dato-cms';
import { Box, createStyles } from '@mantine/core';

export type NavLinkGroupProps = Omit<
  Parameters<typeof Box<'nav'>>[0],
  'children'
> & {
  links: PageLinkFragment[];
  currentPage?: string;
  linkProps?: Omit<NavLinkProps, 'children' | 'href' | 'title' | 'active'>;
};

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  link: {
    display: 'block',
    flexGrow: 1,
  },
}));

const NavLinkGroup = ({
  links,
  linkProps,
  currentPage,
  className,
  classNames,
  styles,
  ...props
}: NavLinkGroupProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'NavLinkGroup',
    styles,
    classNames,
  });
  return (
    <Box component="nav" className={cx(classes.root, className)} {...props}>
      {links.map(({ id, urlSlug, name }) => {
        return (
          <NavLink
            key={id}
            href={`/${urlSlug}`}
            active={currentPage === name}
            className={cx(classes.link)}
          >
            {name}
          </NavLink>
        );
      })}
    </Box>
  );
};

export default NavLinkGroup;
