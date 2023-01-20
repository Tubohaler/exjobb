import StructuredText, {
  StructuredTextProps,
} from '@components/structured-text/StructuredText';
import type { SectionFragment } from '@lib/dato-cms';
import { Article } from '@components/elements/layout';
import PageSectionHeader from './PageSectionHeader';
import { createStyles } from '@mantine/styles';
import { Box, DefaultProps, Selectors } from '@mantine/core';

export type PageSectionProps = DefaultProps<PageSectionStylesNames> & {
  section: SectionFragment;
  structuredTextProps?: Omit<StructuredTextProps, 'data'>;
};

export type PageSectionStylesNames = Selectors<typeof useStyles>;

const useStyles = createStyles((theme) => ({
  root: {},
  header: {},
  body: {
    position: 'relative',
    width: theme.breakpoints.md,
    maxWidth: '100%',
  },
}));

const PageSection = ({
  section,
  className,
  classNames,
  styles,
  structuredTextProps = {},
  ...props
}: PageSectionProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'PageSection',
    classNames,
    styles,
  });
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
