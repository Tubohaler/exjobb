import { Group, GroupProps } from '@mantine/core';
import React from 'react';
import NavLink from './NavLink';

const NavLinks = (props: Omit<GroupProps, 'children'>) => {
  return (
    <Group {...props}>
      <NavLink href="/" active>
        Home
      </NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/career">Career</NavLink>
      <NavLink href="/studio">Studio</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </Group>
  );
};

export default NavLinks;
