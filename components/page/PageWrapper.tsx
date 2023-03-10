import { Box, createStyles, DefaultProps, Selectors } from '@mantine/core';
import { PageQuery } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';
import Head from '@components/page/Head';
import PageSection, { PageSectionProps } from '@components/page/PageSection';
import { useMemo, useRef } from 'react';
import SectionDivider from '@components/elements/buttons/SectionDivider';
import useSmallerThan from '@hooks/useSmallerThan';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;
export type PageWrapperStylesParams = {
  headerHeight: number;
  footerHeight: number;
};

export type PageWrapperProps = DefaultProps<
  PageWrapperStylesNames,
  PageWrapperStylesParams
> & {
  data: PageQuery;
  sectionProps?: Partial<Omit<PageSectionProps, 'section' | 'divider'>>;
};

const useStyles = createStyles(
  (theme, { headerHeight, footerHeight }: PageWrapperStylesParams, getRef) => ({
    root: {
      width: '100vw',
      height: '100%',
      maxWidth: '100%',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      alignContent: 'center',
      [`& .${getRef('main')}, .${getRef('footer')}, .${getRef('header')}`]: {
        minWidth: theme.breakpoints.xs * 0.25,
        width: '100%',
      },
    },
    main: {
      ref: getRef('main'),
      position: 'relative',
      height: 'auto',
      minHeight: `calc(100vh - ${footerHeight + headerHeight}px)`,
      backgroundColor: theme.colors.background[1],
      marginTop: headerHeight,
    },
    header: {
      ref: getRef('header'),
    },
    footer: { ref: getRef('footer') },
  })
);

const fixedHeights = {
  header: { base: 80, md: 110 },
  footer: { base: 160, sm: 280 },
};

const PageWrapper = ({
  data,
  className,
  classNames,
  styles,
  sectionProps,
  ...props
}: PageWrapperProps) => {
  const smallerThanMd = useSmallerThan('md');
  const smallerThanSm = useSmallerThan('sm');
  const headerHeight = useMemo(
    () => fixedHeights.header[smallerThanMd ? 'md' : 'base'],
    [smallerThanMd]
  );
  const footerHeight = useMemo(
    () => fixedHeights.footer[smallerThanSm ? 'sm' : 'base'],
    [smallerThanSm]
  );

  const mainRef = useRef<HTMLDivElement>(null);

  const { classes, cx } = useStyles(
    { headerHeight, footerHeight },
    {
      name: 'PageWrapper',
      styles,
      classNames,
    }
  );

  return (
    <>
      <Head data={data} />
      <Box className={cx(classes.root, className)} {...props}>
        {data.page && (
          <>
            <Header
              data={data.page.header}
              currentPage={data.page?.name}
              className={classes.header}
              height={headerHeight}
            />
            <Box className={classes.main} component="main" ref={mainRef}>
              {data.page.sections.map((section, i, sections) => {
                if (section.__typename === 'PageSectionHtmlRecord') return null;
                const props: Partial<Omit<PageSectionProps, 'section'>> =
                  sectionProps || {};
                const getTargetId = (direction: 'up' | 'down') => {
                  return `#section-${
                    direction === 'up' ? section.id : sections[i + 1]?.id
                  }`;
                };
                return (
                  <PageSection
                    id={`section-${section.id}`}
                    key={section.id}
                    section={section}
                    dividerSize={data.page?.sectionDivider?.size || 0}
                    footerHeight={footerHeight}
                    headerHeight={headerHeight}
                    divider={
                      data.page?.sectionDivider && i < sections.length - 1 ? (
                        <SectionDivider
                          divider={data.page.sectionDivider}
                          getTargetId={getTargetId}
                          headerHeight={headerHeight}
                        />
                      ) : undefined
                    }
                    {...props}
                  />
                );
              })}
            </Box>
            <Footer
              height={footerHeight}
              data={data.page.footer}
              className={classes.footer}
            />
          </>
        )}
      </Box>
    </>
  );
};
export default PageWrapper;
