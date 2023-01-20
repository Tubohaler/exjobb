import NavLink, { NavLinkProps } from '@components/elements/links/NavLink';
import { PageLinkFragment } from '@lib/dato-cms';
import { Group, GroupProps } from '@mantine/core';

export type NavLinkGroupProps = Omit<GroupProps, 'children'> & {
  links: PageLinkFragment[];
  currentPage?: string;
  linkProps?: Omit<NavLinkProps, 'children' | 'href' | 'title' | 'active'>;
};

const NavLinkGroup = ({
  links,
  linkProps,
  currentPage,
  ...props
}: NavLinkGroupProps) => {
  return (
    <Group {...props} spacing={0}>
      {links.map(({ id, urlSlug, name }) => {
        return (
          <NavLink key={id} href={`/${urlSlug}`} active={name === currentPage}>
            {name}
          </NavLink>
        );
      })}
    </Group>
  );
};

export default NavLinkGroup;
