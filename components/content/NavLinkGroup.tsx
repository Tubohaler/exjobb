import NavLink, { NavLinkProps } from '@components/elements/links/NavLink';
import { PageLinkFragment } from '@lib/dato-cms';
import { Box, createStyles, Text } from '@mantine/core';
import { Fragment } from 'react';

export type NavLinkGroupProps = Omit<
  Parameters<typeof Box<'ul'>>[0],
  'children'
> & {
  links: PageLinkFragment[];
  currentPage?: string;
  linkProps?: Omit<NavLinkProps, 'children' | 'href' | 'title' | 'active'>;
};

const useStyles = createStyles((theme) => {
  const margin = '1.5ch';
  return {
    root: {
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 0,
      padding: 0,
      margin: 0,
    },
    listItem: {
      lineHeight: 1,
      padding: 0,
      margin: 0,
      width: 'auto',
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      '&:not(:last-of-type)': {
        marginRight: margin,
      },
      '&:not(:first-of-type)': {
        marginLeft: margin,
        '&:before': {
          content: '"/"',
          position: 'absolute',
          display: 'inline',
          textAlign: 'center',
          userSelect: 'none',
          left: `-${margin}`,
          transform: 'translateX(-50%)',
        },
      },
    },
    link: {
      display: 'block',
      flexGrow: 1,
    },
    divider: {
      userSelect: 'none',
    },
  };
});

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
    <Box component="ul" className={cx(classes.root, className)} {...props}>
      {links.map(({ id, urlSlug, name }, i) => {
        return (
          <Box component="li" key={id} className={classes.listItem}>
            <NavLink
              key={id}
              href={`/${urlSlug}`}
              active={currentPage === name}
              className={cx(classes.link)}
            >
              {name}
            </NavLink>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavLinkGroup;
