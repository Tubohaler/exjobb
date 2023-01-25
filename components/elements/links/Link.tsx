import { Anchor, createStyles, Selectors, DefaultProps } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';
import { forwardRef } from 'react';

export type LinkStylesNames = Selectors<typeof useStyles>;

export type LinkProps = DefaultProps<LinkStylesNames> &
  Parameters<typeof Anchor<'a'>>[0];

const useStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
    textDecoration: 'none',
    transition: createTransition([
      'color',
      'border-color',
      'text-decoration-color',
    ]),
    '&:hover': {
      color: theme.colors.red[2],
      textDecoration: 'none',
    },
  },
}));

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ styles, className, classNames, unstyled, ...props }, ref) => {
    const { classes, cx } = useStyles(undefined, {
      name: 'Link',
      classNames,
      unstyled,
      styles,
    });
    return (
      <Anchor
        ref={ref}
        component="a"
        className={cx(classes.root, className)}
        {...props}
      />
    );
  }
);

export default Link;
