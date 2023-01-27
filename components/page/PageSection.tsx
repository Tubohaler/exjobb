import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { PageSectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';
import { createStyles } from '@mantine/styles';
import {
  Box,
  DefaultProps,
  MantineNumberSize,
  Selectors,
  CSSObject,
} from '@mantine/core';

export type PageSectionProps = DefaultProps<
  PageSectionStylesNames,
  PageSectionStylesParams
> &
  Omit<Parameters<typeof Article>[0], 'children'> & {
    section: PageSectionFragment;
    fullscreen?: boolean;
    contentWidth?: MantineNumberSize;
    divider?: React.ReactNode;
    dividerSize?: number;
    headerHeight?: number;
    footerHeight?: number;
    structuredTextProps?: Omit<StructuredTextProps, 'data'>;
  };

export type PageSectionStylesNames = Selectors<typeof useStyles>;
export type PageSectionStylesParams = {
  withTitle?: boolean;
  dividerSize?: number;
  headerHeight?: number;
  footerHeight?: number;
  contentWidth?: MantineNumberSize;
  alignCenter?: PageSectionFragment['alignContentCenter'];
};

const useStyles = createStyles(
  (
    theme,
    {
      withTitle,
      contentWidth,
      alignCenter,
      dividerSize = 0,
      headerHeight = 0,
      footerHeight = 0,
    }: PageSectionStylesParams,
    getRef
  ) => {
    const pY = theme.spacing.xl * 4;
    const contentStyles: CSSObject = {
      width: '100%',
      minWidth: 0,
      maxWidth:
        typeof contentWidth === 'number'
          ? contentWidth
          : typeof contentWidth === 'string'
          ? theme.breakpoints[contentWidth]
          : theme.breakpoints.md,
    };
    return {
      root: {
        width: '100%',
        maxWidth: '100vw',
        minHeight: '50vh',
        padding: `${pY}px ${theme.spacing.xl}px`,
        display: 'grid',
        gridTemplateRows: withTitle ? 'auto 1fr' : '1fr',
        gridTemplateColumns: '1fr',
        gap: theme.spacing.xl * 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'relative',
        ['&:not(:first-of-type)']: !dividerSize
          ? {}
          : {
              paddingTop: `${pY + dividerSize * 0.5}px`,
            },
        ['&:not(:last-of-type)']: !dividerSize
          ? {}
          : {
              paddingBottom: `${pY + dividerSize * 0.5}px`,
            },
        [theme.fn.smallerThan('sm')]: {
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
        },
        [`&:last-of-type .${getRef('divider')}`]: {
          display: 'none',
        },

        [`&.${getRef('fullscreen')}`]: {
          padding: 0,
          height: '100%',
          minHeight: 240,
          maxWidth: '100vw',
          position: 'relative',
          maxHeight: `calc(100vh - ${(dividerSize ?? 0) * 1.1}px)`,
          [`& .${getRef('body')}, & .${getRef('sectionHeader')}`]: {
            maxWidth: '100%',
          },
          [`& .${getRef('body')}`]: {
            height: '100%',
            overflow: 'hidden',
          },
        },
        [`&:first-of-type.${getRef('fullscreen')}`]: {
          maxHeight: `calc(100vh - calc(${headerHeight || 70}px + ${
            (dividerSize || 0) * 0.55
          }px))`,
          [theme.fn.smallerThan('md')]: {
            maxHeight: `calc(100vh - calc(${headerHeight || 110}px + ${
              (dividerSize || 0) * 0.55
            }px))`,
          },
        },
        [`&:last-of-type.${getRef('fullscreen')}`]: {
          maxHeight: `calc(100vh - calc(${footerHeight || 110}px + ${
            (dividerSize || 0) * 0.55
          }px))`,
          [theme.fn.smallerThan('md')]: {
            maxHeight: `calc(90vh - calc(${footerHeight || 250}px + ${
              (dividerSize || 0) * 0.55
            }px))`,
          },
        },
      },
      sectionHeader: {
        ref: getRef('sectionHeader'),
        ...contentStyles,
      },
      body: {
        ref: getRef('body'),
        ...contentStyles,
        position: 'relative',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: alignCenter ? 'center' : 'normal',
        textAlign: alignCenter ? 'center' : 'initial',
        '& > section + :not(section)': {
          marginTop: theme.spacing.xl,
        },
        '& > :not(section, h1, h2, h3, h4, h5, h6):has(+ section)': {
          marginBottom: theme.spacing.xl * 2,
        },
      },
      fullscreen: {
        ref: getRef('fullscreen'),
      },
      divider: {
        ref: getRef('divider'),
        position: 'absolute',
        zIndex: 10,
        bottom: 0,
        right: 'auto',
        left: 'auto',
        transform: 'translateY(50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    };
  }
);

const PageSection = ({
  section,
  divider,
  dividerSize,
  className,
  classNames,
  styles,
  structuredTextProps = {},
  fullscreen,
  contentWidth,
  footerHeight,
  headerHeight,
  ...props
}: PageSectionProps) => {
  const { classes, cx } = useStyles(
    {
      dividerSize,
      withTitle: !!section.title,
      contentWidth:
        contentWidth !== undefined
          ? contentWidth
          : section.content.links[0]?.__typename === 'ProjectGalleryRecord'
          ? 'xl'
          : 'md',
      alignCenter: section.alignContentCenter,
      footerHeight,
      headerHeight,
    },
    {
      name: 'PageSection',
      classNames,
      styles,
    }
  );

  return (
    <Article
      className={cx(
        classes.root,
        fullscreen === true ||
          (fullscreen !== false &&
            section.content.links[0]?.__typename === 'CoverVideoRecord')
          ? classes.fullscreen
          : null,
        className
      )}
      {...props}
    >
      {section.title && (
        <PageSectionHeader
          title={section.title}
          alignCenter={section.alignTitleCenter}
          className={classes.sectionHeader}
        />
      )}
      <Box className={classes.body}>
        <StructuredText data={section.content} {...structuredTextProps} />
      </Box>
      {divider && <Box className={classes.divider}>{divider}</Box>}
    </Article>
  );
};

export default PageSection;
