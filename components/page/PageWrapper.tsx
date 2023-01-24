import {
  Box,
  createStyles,
  DefaultProps,
  Selectors,
  useMantineTheme,
} from '@mantine/core';
import { PageQuery, PageSectionFragment } from '@lib/dato-cms';
import Header from './Header';
import Footer from './Footer';
import Head from '@components/page/Head';
import PageSection, { PageSectionProps } from '@components/page/PageSection';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export type PageWrapperStylesNames = Selectors<typeof useStyles>;
export type PageWrapperStylesParams = { headerHeight: number };

export type PageWrapperProps = DefaultProps<
  PageWrapperStylesNames,
  PageWrapperStylesParams
> & {
  data: PageQuery;
  sectionProps?: Partial<Omit<PageSectionProps, 'section'>>;
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
  const [currentSection, setCurrentSection] = useState(
    data.page?.sections[0]?.id
  );
  const prevSection = useRef(currentSection);
  const theme = useMantineTheme();
  const smallScreen = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

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

  useEffect(() => {
    if (!data.page || currentSection === prevSection.current) return;
    document
      .querySelector(`#section-${currentSection}`)
      ?.scrollIntoView({ behavior: 'smooth' });
    prevSection.current = currentSection;
  }, [data, currentSection]);

  const handleDividerClick = (id: string) => {
    if (!data.page) return;
    setCurrentSection(id);
  };

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
            <Box className={classes.main} component="main">
              {data.page.sections.map((section) => {
                if (section.__typename === 'PageSectionHtmlRecord') return null;
                const props: Partial<Omit<PageSectionProps, 'section'>> = {
                  divider: data.page?.sectionDivider,
                  onDividerClick: handleDividerClick,
                  ...(sectionProps || {}),
                };
                return (
                  <PageSection
                    id={`section-${section.id}`}
                    key={section.id}
                    section={section}
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
