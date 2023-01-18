import { AppShell, createStyles } from '@mantine/core';

import { StaticPageData } from '@lib/dato-cms';

import Header from './Header';
import Footer from './Footer';

const useStyles = createStyles((theme) => ({
  root: {},
  body: { background: theme.colors.beige[1] },
}));

export type PageWrapperProps = {
  children: React.ReactNode;
  data: StaticPageData;
};

const PageWrapper = ({ children, data }: PageWrapperProps) => {
  const { classes } = useStyles(undefined, { name: 'PageWrapper' });
  return (
    <AppShell
      padding={0}
      className={classes.root}
      classNames={{ body: classes.body }}
      header={
        data.header ? (
          <Header data={data.header} currentPage={data.page?.name} />
        ) : undefined
      }
    >
      {children}
      {data.footer && <Footer data={data.footer} />}
    </AppShell>
  );
};
export default PageWrapper;