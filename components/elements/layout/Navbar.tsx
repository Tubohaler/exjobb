import {
  AppShell,
  Header as MantineHeader,
  HeaderProps,
  Footer,
  Group,
  GroupProps,
  Anchor,
  AnchorProps,
  Flex,
  Container,
  Text,
  ActionIcon,
} from '@mantine/core';
import React from 'react';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandSteam,
} from '@tabler/icons';

import Projects from './Projects';
import { Action } from '@remix-run/router';

type NavbarProps = {
  children: React.ReactNode;
};

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

const Header = (props: Omit<HeaderProps, 'children'>) => {
  return (
    <MantineHeader p="md" {...props}>
      <Flex
        justify="flex-end"
        align="center"
        direction="row"
        background-color="white"
      >
        <NavLinks spacing="xs" />
      </Flex>
    </MantineHeader>
  );
};

const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={<Header height={70} />}>
      {children}
      <Footer height={110} p="md">
        <Group position="apart" spacing="xl">
          <Text size="sm">
            © 2023 Copyright Might and Delight. <br />
            All rights reserved.
          </Text>
          <Text size="sm">
            Might and Delight AB
            <br /> Stenkullavägen 43
            <br />
            112 65 Stockholm
            <br />
            contact@mightanddelight.com
          </Text>
          <Flex>
            <ActionIcon>
              <IconBrandFacebook size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBrandSteam size={18} stroke={1.5} />
            </ActionIcon>
          </Flex>
        </Group>
      </Footer>
    </AppShell>
  );
};

export default Navbar;
