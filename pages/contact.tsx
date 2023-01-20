import { PageWrapper, Section } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, createStyles } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');

const useStyles = createStyles((theme) => {
  return {
    root: {
      height: '100%',
    },
    body: {
      width: 'min(100%, 40ch)',
      height: 'min(100%, 40rem)',
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing.xl,
      [theme.fn.smallerThan('sm')]: {
        height: 'auto',
        flexWrap: 'nowrap',
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
            minHeight: '25%',
            [theme.fn.smallerThan('sm')]: {
              minHeight: '5em',
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
