import { Anchor } from '@mantine/core';
import React from 'react';
import Link from 'next/link';

type NavLinkProps = Parameters<typeof Anchor<typeof Link>>[0] & {
  active?: boolean;
};

const NavLink = ({ active, ...props }: NavLinkProps) => {
  return (
    <Anchor
      component={Link}
      sx={(theme) => ({
        color: active ? theme.colors.blue[2] : theme.black,
        textDecoration: 'none',
        transition: 'all 0.33s ease-in-out 0.1s',
        '&:hover': {
          color: theme.colors.red[2],
          textDecoration: 'none',
        },
        '&:not(:last-of-type):after': {
          content: '"/"',
        },
      })}
      {...props}
    />
  );
};

export default NavLink;
