import { Anchor, createStyles, Selectors, DefaultProps } from '@mantine/core';
import { createTransition } from '@lib/theme/utils';
import { forwardRef } from 'react';
import { ExtendedTheme } from 'context/ExtendedTheme.context';
import useExtendedTheme from '@hooks/useExtendedTheme';

export type LinkStylesNames = Selectors<typeof useStyles>;
export type LinkStylesParams = { extended: ExtendedTheme };

export type LinkProps = DefaultProps<LinkStylesNames, LinkStylesParams> &
  Parameters<typeof Anchor<'a'>>[0];

const useStyles = createStyles((theme, { extended }: LinkStylesParams) => ({
  root: {
    color: theme.colorScheme === 'light' ? theme.black : theme.white,
    textDecoration: 'none',
    transition: createTransition([
      'color',
      'border-color',
      'text-decoration-color',
    ]),
    '&:hover': {
      color: extended.fn.activeColor(),
      textDecoration: 'none',
    },
  },
}));

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ styles, className, classNames, unstyled, ...props }, ref) => {
    const extended = useExtendedTheme();
    const { classes, cx } = useStyles(
      { extended },
      {
        name: 'Link',
        classNames,
        unstyled,
        styles,
      }
    );
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
