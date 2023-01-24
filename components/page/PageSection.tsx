import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { PageSectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';
import { createStyles } from '@mantine/styles';
import { Box, DefaultProps, Selectors, useMantineTheme } from '@mantine/core';

export type PageSectionProps = DefaultProps<PageSectionStylesNames> & {
  section: PageSectionFragment;
  fullscreen?: boolean;
  structuredTextProps?: Omit<StructuredTextProps, 'data'>;
};

export type PageSectionStylesNames = Selectors<typeof useStyles>;
export type PageSectionStylesParams = { withHeader?: boolean };

const useStyles = createStyles(
  (theme, { withHeader }: PageSectionStylesParams, getRef) => {
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
        [theme.fn.smallerThan('sm')]: {
          paddingLeft: theme.spacing.sm,
          paddingRight: theme.spacing.sm,
        },
        [`&.${getRef('fullscreen')}`]: {
          padding: 0,
          height: '100%',
          maxHeight: 'calc(95vh - 70px)',
          maxWidth: '100vw',
          overflow: 'hidden',
          position: 'relative',
          [`& .${getRef('body')}`]: {
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
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
        maxWidth: theme.breakpoints.md,
        minWidth: 0,
        '& > section + *': {
          marginTop: theme.spacing.xl,
        },
        '& > :not(h1, h2, h3, h4, h5, h6):has(+ section)': {
          marginBottom: theme.spacing.xl * 2,
        },
      },
      fullscreen: {
        ref: getRef('fullscreen'),
      },
    };
  }
);

const PageSection = ({
  section,
  className,
  classNames,
  styles,
  structuredTextProps = {},
  fullscreen,
  ...props
}: PageSectionProps) => {
  const { classes, cx } = useStyles(
    { withHeader: !!section.title },
    {
      name: 'PageSection',
      classNames,
      styles,
    }
  );
  return (
    <Article
      className={cx(classes.root, fullscreen && classes.fullscreen, className)}
      {...props}
    >
      {section.title && (
        <PageSectionHeader title={section.title} className={classes.header} />
      )}
      <Box className={classes.body}>
        <StructuredText data={section.content} {...structuredTextProps} />
      </Box>
    </Article>
  );
};

export default PageSection;
