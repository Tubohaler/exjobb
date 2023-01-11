import type { Sx, CSSObject, MantineTheme } from '@mantine/core';

/**
 * Combine two Sx functions or Css Objects into one
 *
 * @example
 * import { Anchor, AnchorProps, Sx } from "@mantine/core";
 * import { combineSx } from "@lib/mantine-utils";
 *
 * const defaultSx: Sx = (theme) => ({color: theme.black});
 *
 * const CustomAnchor = ({sx, ...props}: AnchorProps) => {
 *  return <Anchor sx={combineSx(defaultSx, sx)} {...props} />
 * }
 *
 * @param a main sx prop
 * @param b additional sx objects or functions
 */
export const combineSx = (
  a: Sx,
  b?: Sx
): ((theme: MantineTheme) => CSSObject) => {
  return (theme) => {
    const css = typeof a === 'function' ? a(theme) : a;
    return !b ? css : { ...css, ...(typeof b === 'function' ? b(theme) : b) };
  };
};
