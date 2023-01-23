import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { PageQuery, SectionFragment } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';
import Head from '@components/page/Head';
import PageSection, { PageSectionProps } from '@components/page/PageSection';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;

export type PageWrapperProps = DefaultProps<PageWrapperStylesNames> & {
  data: PageQuery;
  sectionProps?:
    | Partial<Omit<PageSectionProps, 'section'>>
    | ((
        section: SectionFragment
      ) => Partial<Omit<PageSectionProps, 'section'>>);
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
  data,
  className,
  classNames,
  styles,
  sectionProps,
  ...props
}: PageWrapperProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'PageWrapper',
    styles,
    classNames,
  });
  return (
    <>
      <Head data={data} />
      <Box className={cx(classes.root, className)} {...props}>
        {data.header && (
          <Header
            data={data.header}
            currentPage={data.page?.name}
            className={classes.header}
          />
        )}
        <Box className={classes.main} component="main">
          {data.page?.sections.map((section) => {
            const props =
              typeof sectionProps === 'function'
                ? sectionProps(section)
                : sectionProps || {};
            return (
              <PageSection key={section.id} section={section} {...props} />
            );
          })}
        </Box>
        {data.footer && (
          <Footer data={data.footer} className={classes.footer} />
        )}
      </Box>
    </>
  );
};
export default PageWrapper;
