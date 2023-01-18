import { AppShell, createStyles } from '@mantine/core';
import { PageQuery } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';

const useStyles = createStyles((theme) => ({
  root: {},
  body: { background: theme.colors.beige[1] },
}));

export type PageWrapperProps = {
  children: React.ReactNode;
  data: PageQuery;
};

const PageWrapper = ({ children, data }: PageWrapperProps) => {
  const { classes } = useStyles(undefined, { name: 'PageWrapper' });
  return (
    <AppShell
      padding={0}
      className={classes.root}
      classNames={{ body: classes.body }}
    >
      {data.header && (
        <Header data={data.header} currentPage={data.page?.name} />
      )}
      {children}
      {data.footer && <Footer data={data.footer} />}
    </AppShell>
  );
};
export default PageWrapper;
