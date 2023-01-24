import {
  Box,
  createStyles,
  DefaultProps,
  Selectors,
  useMantineTheme,
} from '@mantine/core';
import { PageQuery } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';
import Head from '@components/page/Head';
import PageSection, { PageSectionProps } from '@components/page/PageSection';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import SectionDivider from '@components/elements/buttons/SectionDivider';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;
export type PageWrapperStylesParams = { headerHeight: number };

export type PageWrapperProps = DefaultProps<
  PageWrapperStylesNames,
  PageWrapperStylesParams
> & {
  data: PageQuery;
  sectionProps?: Partial<Omit<PageSectionProps, 'section' | 'divider'>>;
};

const useStyles = createStyles(
  (theme, { headerHeight }: PageWrapperStylesParams, getRef) => ({
    root: {
      width: '100vw',
      maxWidth: '100%',
      minHeight: '100vh',
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
      minHeight: '100%',
      backgroundColor: theme.colors.beige[1],
      paddingTop: headerHeight,
    },
    header: {
      ref: getRef('header'),
      [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
      [theme.fn.smallerThan('xs')]: {
        padding: theme.spacing.xs,
      },
    },
    footer: { ref: getRef('footer') },
  })
);

const PageWrapper = ({
  data,
  className,
  classNames,
  styles,
  sectionProps,
  ...props
}: PageWrapperProps) => {
  const [headerHeight, setHeaderHeight] = useState(80);

  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  const mainRef = useRef<HTMLDivElement>(null);

  const { classes, cx } = useStyles(
    { headerHeight },
    {
      name: 'PageWrapper',
      styles,
      classNames,
    }
  );

  useEffect(() => {
    setHeaderHeight(smallScreen ? 140 : 80);
  }, [smallScreen]);

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
                    divider={
                      data.page?.sectionDivider && i < sections.length - 1 ? (
                        <SectionDivider
                          icon={data.page.sectionDivider}
                          getTargetId={getTargetId}
                          onClick={(direction) => {
                            const rect = document
                              .querySelector(getTargetId(direction))
                              ?.getBoundingClientRect();
                            if (!rect) return;
                            window.scrollTo({
                              top: rect.top - headerHeight,
                              behavior: 'smooth',
                            });
                          }}
                        />
                      ) : undefined
                    }
                    {...props}
                  />
                );
              })}
            </Box>
            <Footer data={data.page.footer} className={classes.footer} />
          </>
        )}
      </Box>
    </>
  );
};
export default PageWrapper;
