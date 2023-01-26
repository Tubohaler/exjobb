import { forwardRef } from 'react';
import Link from './Link';
import {
  createStyles,
  CSSObject,
  DefaultProps,
  Selectors,
} from '@mantine/core';

import SvgIcon, { SvgIconProps } from '../SvgIcon';
import { useRef } from 'react';
import { createTransition } from '@lib/theme/utils';
import { ExtendedTheme } from 'context/ExtendedTheme.context';
import useExtendedTheme from '@hooks/useExtendedTheme';

export type SvgIconLinkStylesNames = Selectors<typeof useStyles>;
export type SvgIconLinkStylesParams = {
  extended: ExtendedTheme;
};

export type SvgIconLinkProps = DefaultProps<
  SvgIconLinkStylesNames,
  SvgIconLinkStylesParams
> &
  Parameters<typeof Link>[0] &
  Pick<SvgIconProps, 'src' | 'fallback'>;

const useStyles = createStyles((_, { extended }: SvgIconLinkStylesParams) => {
  const styles: Record<'root' | 'wrapper', CSSObject> = {
    root: {
      display: 'inline-block',
      outline: 'none',
      transition: createTransition(['color', 'opacity']),
      lineHeight: 1,
      '&:hover': {
        color: extended.fn.activeColor(),
        opacity: 1,
      },
    },
    wrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      color: 'inherit',
    },
  };
  return styles;
});

const SvgIconLink = forwardRef<HTMLAnchorElement, SvgIconLinkProps>(
  (
    { src, styles, unstyled, className, classNames, fallback, ...props },
    ref
  ) => {
    const extended = useExtendedTheme();
    const stylesParams = useRef<SvgIconLinkStylesParams>({
      extended,
    });
    const { classes, cx } = useStyles(stylesParams.current, {
      name: 'IconLink',
      classNames,
      styles,
      unstyled,
    });

    return (
      <Link ref={ref} className={cx(classes.root, className)} {...props}>
        <SvgIcon src={src} className={classes.wrapper} fallback={fallback} />
      </Link>
    );
  }
);

export default SvgIconLink;
