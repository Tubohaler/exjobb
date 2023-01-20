import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { PageQuery } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';
import { CSSObject } from '@emotion/react';
import { useState } from 'react';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;

export type PageWrapperProps = DefaultProps<PageWrapperStylesNames> & {
  children: React.ReactNode;
  data: PageQuery;
};

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    padding: 0,
    width: '100vw',
    maxWidth: '100%',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    alignContent: 'center',
    [`& > .${getRef('main')}, & > .${getRef('header')}, & > .${getRef(
      'footer'
    )} `]: {
      minWidth: theme.breakpoints.xs * 0.25,
      width: '100%',
    },
  },
  main: {
    ref: getRef('main'),
    position: 'relative',
    height: 'auto',
    minHeight: '100%',
    backgroundColor: theme.colors.beige[1],
    padding: 0,
  },
  header: {
    ref: getRef('header'),
  },
  footer: { ref: getRef('footer') },
}));

const PageWrapper = ({
  children,
  data,
  className,
  classNames,
  styles,
  ...props
}: PageWrapperProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'PageWrapper',
    styles,
    classNames,
  });
  return (
    <Box className={cx(classes.root, className)} {...props}>
      {data.header && (
        <Header
          data={data.header}
          currentPage={data.page?.name}
          className={classes.header}
        />
      )}
      <Box className={classes.main} component="main">
        {children}
      </Box>
      {data.footer && <Footer data={data.footer} className={classes.footer} />}
    </Box>
  );
};
export default PageWrapper;
