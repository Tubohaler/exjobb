import { FooterFragment } from '@lib/dato-cms';
import { Box, createStyles, List, Text } from '@mantine/core';
import StructuredText from '@components/structured-text/StructuredText';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';

export type FooterProps = Omit<
  Parameters<typeof Box<'footer'>>[0],
  'children'
> & {
  data: FooterFragment;
};

const useStyles = createStyles((theme, _, getRef) => ({
  root: {
    minHeight: 110,
    padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
    backgroundColor: theme.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
      minHeight: 250,
      flexDirection: 'column-reverse',
      padding: theme.spacing.md,
      [`& .${getRef('section')}:first-of-type, & .${getRef(
        'section'
      )}:last-of-type`]: {
        alignItems: 'center',
      },
    },
  },
  section: {
    ref: getRef('section'),
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.fontSizes.sm,
    '&:first-of-type': {
      alignItems: 'flex-start',
    },
    '&:last-of-type': {
      alignItems: 'flex-end',
    },
  },
}));

const structuredTextProps = createStructuredTextProps({
  nodeRules: {
    Paragraph: ({ key, children }) => {
      return (
        <Text key={key} m={0}>
          {children}
        </Text>
      );
    },
    List: ({ key, children }) => {
      return (
        <List
          key={key}
          listStyleType="none"
          p={0}
          sx={(theme) => ({
            textAlign: 'center',
            fontSize: theme.fontSizes.md,
          })}
        >
          {children}
        </List>
      );
    },
  },
});

const Footer = ({
  data,
  className,
  classNames,
  styles,
  ...props
}: FooterProps) => {
  const { classes, cx } = useStyles(undefined, {
    name: 'Footer',
    classNames,
    styles,
  });
  return (
    <Box component="footer" className={cx(classes.root, className)} {...props}>
      {data.sections.map((section) => {
        return (
          <Box key={section.id} className={classes.section}>
            <StructuredText data={section.content} {...structuredTextProps} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Footer;