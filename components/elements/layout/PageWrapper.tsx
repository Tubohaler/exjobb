import {
  AppShell,
  Box,
  createStyles,
  DefaultProps,
  Selectors,
} from '@mantine/core';
import { PageQuery } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;

export type PageWrapperProps = DefaultProps<PageWrapperStylesNames> & {
  children: React.ReactNode;
  data: PageQuery;
};

const useStyles = createStyles((theme) => ({
  root: {
    padding: 0,
    width: '100%',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '1fr',
    alignContent: 'center',
    justifyItems: 'center',
  },
  main: {
    width: '100%',
    height: '100%',
    minHeight: 'fit-content',
    background: theme.colors.beige[1],
    padding: 0,
  },
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
        <Header data={data.header} currentPage={data.page?.name} />
      )}
      <Box className={classes.main} component="main">
        {children}
      </Box>
      {data.footer && <Footer data={data.footer} />}
    </Box>
  );
};
export default PageWrapper;
