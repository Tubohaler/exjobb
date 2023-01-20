import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { SectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';
import { createStyles } from '@mantine/styles';
import { Box, DefaultProps, Selectors, useMantineTheme } from '@mantine/core';

export type PageSectionProps = DefaultProps<PageSectionStylesNames> & {
  section: SectionFragment;
  structuredTextProps?: Omit<StructuredTextProps, 'data'>;
  headerHeight?: number;
};

export type PageSectionStylesNames = Selectors<typeof useStyles>;
export type PageSectionStylesParams = { withHeader?: boolean };

const useStyles = createStyles(
  (theme, { withHeader }: PageSectionStylesParams) => {
    return {
      root: {
        width: '100%',
        maxWidth: '100vw',
        flexBasis: '80vh',
        padding: `${theme.spacing.xl * 3}px ${theme.spacing.xl}px`,
        position: 'relative',
        justifyContent: 'center',
        display: 'grid',
        gridTemplateRows: withHeader ? 'auto 1fr' : '1fr',
        gridTemplateColumns: '1fr',
        gap: theme.spacing.xl,
        alignContent: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.fn.smallerThan('sm')]: {
          padding: `${theme.spacing.xl * 3}px ${theme.spacing.md}px`,
        },
      },
      header: {},
      body: {
        position: 'relative',
        width: theme.breakpoints.md,
        maxWidth: '100%',
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
  ...props
}: PageSectionProps) => {
  const theme = useMantineTheme();

  const { classes, cx } = useStyles(
    { withHeader: !!section.title },
    {
      name: 'PageSection',
      classNames,
      styles,
    }
  );
  return (
    <Article className={cx(classes.root, className)} {...props}>
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
