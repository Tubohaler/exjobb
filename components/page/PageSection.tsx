import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { PageSectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';
import { createStyles } from '@mantine/styles';
import { Box, DefaultProps, MantineNumberSize, Selectors } from '@mantine/core';

export type PageSectionProps = DefaultProps<PageSectionStylesNames> &
  Omit<Parameters<typeof Article>[0], 'children'> & {
    section: PageSectionFragment;
    fullscreen?: boolean;
    contentWidth?: MantineNumberSize;
    divider?: React.ReactNode;
    structuredTextProps?: Omit<StructuredTextProps, 'data'>;
  };

export type PageSectionStylesNames = Selectors<typeof useStyles>;
export type PageSectionStylesParams = {
  withHeader?: boolean;
  withDivider?: boolean;
  contentWidth?: MantineNumberSize;
};

const useStyles = createStyles(
  (
    theme,
    { withHeader, withDivider, contentWidth }: PageSectionStylesParams,
    getRef
  ) => {
    return {
      root: {
        width: '100%',
        maxWidth: '100vw',
        minHeight: '50vh',
        padding: `${theme.spacing.xl * 4}px ${theme.spacing.xl}px`,
        display: 'grid',
        gridTemplateRows: withHeader ? 'auto 1fr' : '1fr',
        gridTemplateColumns: '1fr',
        gap: theme.spacing.xl * 2,
        alignContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'relative',
        [theme.fn.smallerThan('sm')]: {
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
        },
        [`&:last-of-type .${getRef('divider')}`]: {
          display: 'none',
        },
        [`&:not(:first-of-type)`]: !withDivider
          ? {
              paddingTop: theme.spacing.xl * 10,
            }
          : {},
        [`&.${getRef('fullscreen')}`]: {
          padding: 0,
          height: '100%',
          maxHeight: 'calc(90vh - 70px)',
          maxWidth: '100vw',
          position: 'relative',
          [`& .${getRef('body')}`]: {
            width: '100%',
            maxWidth: '100%',
            height: '100%',
            overflow: 'hidden',
          },
          [theme.fn.smallerThan('md')]: {
            maxHeight: 'calc(95vh - 110px)',
          },
        },
      },
      header: {},
      body: {
        ref: getRef('body'),
        position: 'relative',
        width: '100%',
        height: 'auto',
        maxWidth:
          typeof contentWidth === 'number'
            ? contentWidth
            : typeof contentWidth === 'string'
            ? theme.breakpoints[contentWidth]
            : theme.breakpoints.md,
        minWidth: 0,
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
      wider: {
        ref: getRef('wider'),
      },
      divider: {
        ref: getRef('divider'),
        fontSize: theme.fontSizes.xl * 8,
        position: 'absolute',
        zIndex: 100,
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
  className,
  classNames,
  styles,
  structuredTextProps = {},
  fullscreen,
  contentWidth,
  ...props
}: PageSectionProps) => {
  const { classes, cx } = useStyles(
    {
      withHeader: !!section.title,
      withDivider: !!divider,
      contentWidth:
        contentWidth !== undefined
          ? contentWidth
          : section.content.links[0]?.__typename === 'ProjectGalleryRecord'
          ? 'xl'
          : 'md',
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
        <PageSectionHeader title={section.title} className={classes.header} />
      )}
      <Box className={classes.body}>
        <StructuredText data={section.content} {...structuredTextProps} />
      </Box>
      {divider && <Box className={classes.divider}>{divider}</Box>}
    </Article>
  );
};

export default PageSection;
