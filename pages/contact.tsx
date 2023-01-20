import { PageWrapper, Section } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, createStyles, Text } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');

const useStyles = createStyles((theme) => {
  return {
    root: {
      height: '100%',
    },
    body: {
      width: 'min(100%, 35ch)',
      height: 'min(100%, 30rem)',
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
  nodeRules: {
    Paragraph: ({ key, children }) => {
      return <Text key={key}>{children}</Text>;
    },
  },
  blocks: {
    Subsection: ({ children, section }) => {
      return (
        <Section
          sx={(theme) => ({
            width: '100%',
            minHeight: '20%',
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
});

const Career = ({ data }: StaticPageProps) => {
  const { classes } = useStyles();
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          return (
            <PageSection
              key={section.id}
              section={section}
              classNames={classes}
              structuredTextProps={structuredTextProps}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Career;
