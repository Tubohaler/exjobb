import { Anchor, packSx, Sx } from '@mantine/core';
import NextLink from 'next/link';
import { defaultTransition } from '@lib/theme/main';

export type LinkProps = Parameters<typeof Anchor<typeof NextLink>>[0];

export const defaultSx: Sx = (theme) => ({
  color: theme.black,
  textDecoration: 'none',
  transition: defaultTransition,
  '&:hover': {
    color: theme.colors.red[2],
    textDecoration: 'none',
  },
});

const Link = ({ sx, ...props }: LinkProps) => {
  return (
    <Anchor component={NextLink} sx={[defaultSx, ...packSx(sx)]} {...props} />
  );
};

export default Link;
