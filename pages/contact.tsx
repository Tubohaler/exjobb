import { PageWrapper, Section } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, createStyles, List } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');

const useStyles = createStyles((theme) => {
  return {
    root: {
      height: '100%',
    },
    body: {
      width: 'min(100%, 35ch)',
      height: 'min(100%, 28em)',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      flexWrap: 'wrap',
      rowGap: theme.spacing.lg,
      columnGap: theme.spacing.xl * 4,
      [theme.fn.smallerThan('sm')]: {
        height: 'auto',
        flexWrap: 'nowrap',
        rowGap: theme.spacing.xl,
      },
    },
  };
});

const structuredTextProps = createStructuredTextProps({
  blocks: {
    Subsection: ({ children, section }) => {
      return (
        <Section
          sx={(theme) => ({
            width: '100%',
            minHeight: '5em',
            [theme.fn.smallerThan('sm')]: {
              minHeight: 'auto',
            },
          })}
        >
          {section.title && (
            <Title order={3} mb="sm" italic>
              {section.title}
            </Title>
          )}
          {children}
        </Section>
      );
    },
  },
  nodeRules: {
    List: ({ key, children }) => {
      return (
        <List key={key} listStyleType="none">
          {children}
        </List>
      );
    },
  },
});

const Career = ({ data }: StaticPageProps) => {
  const { classes } = useStyles();
  return (
    <PageWrapper
      data={data}
      sectionProps={{
        classNames: classes,
        structuredTextProps,
      }}
    />
  );
};

export default Career;
