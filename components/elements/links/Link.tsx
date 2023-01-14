import {
  Anchor,
  packSx,
  Sx,
  createStyles,
  Selectors,
  DefaultProps,
} from '@mantine/core';
import NextLink from 'next/link';
import { createTransition } from '@lib/theme/utils';

export type LinkStylesNames = Selectors<typeof useStyles>;

export type LinkProps = DefaultProps<LinkStylesNames> &
  Parameters<typeof Anchor<typeof NextLink>>[0];

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
    textDecoration: 'none',
    transition: createTransition(['color']),
    '&:hover': {
      color: theme.colors.red[2],
      textDecoration: 'none',
    },
  },
}));

const Link = ({
  styles,
  className,
  classNames,
  unstyled,
  ...props
}: LinkProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Link',
    classNames,
    unstyled,
    styles,
  });
  return (
    <Anchor
      component={NextLink}
      className={cx(classes.root, className)}
      {...props}
    />
  );
};

export default Link;
