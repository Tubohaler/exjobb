import { FooterFragment } from '@lib/dato-cms';
import { Box, createStyles, List, Text } from '@mantine/core';
import StructuredText from '@components/structured-text/StructuredText';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';

export type FooterProps = Omit<
  Parameters<typeof Box<'footer'>>[0],
  'children'
> & {
  data: FooterFragment;
  height: number;
};

export type FooterStylesParams = { height: number };

const useStyles = createStyles(
  (theme, { height }: FooterStylesParams, getRef) => ({
    root: {
      height,
      padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
      backgroundColor: theme.white,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: theme.spacing.md,
      [theme.fn.smallerThan('sm')]: {
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
      fontSize: theme.fontSizes.md,
      '&:first-of-type': {
        alignItems: 'flex-start',
      },
      '&:last-of-type': {
        alignItems: 'flex-end',
      },
    },
  })
);

const structuredTextProps = createStructuredTextProps({
  nodeRules: {
    Paragraph: ({ key, children }) => {
      return (
        <Text key={key} component="p" m={0}>
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
  height,
  ...props
}: FooterProps) => {
  const { classes, cx } = useStyles(
    { height },
    {
      name: 'Footer',
      classNames,
      styles,
    }
  );
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
