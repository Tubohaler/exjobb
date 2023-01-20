import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, Box } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');
const structuredTextBlocks = createStructuredTextProps({
  blocks: {
    Subsection: ({ children, section }) => {
      return (
        <Box>
          {section.title && (
            <Title order={3} mb="sm" italic>
              {section.title}
            </Title>
          )}
          {children}
        </Box>
      );
    },
  },
});
const Career = ({ data }: StaticPageProps) => {
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          return (
            <PageSection
              styles={(theme) => ({
                root: {
                  padding: theme.spacing.xl,
                },
                body: {
                  padding: theme.spacing.xl,
                  width: theme.breakpoints.sm,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  [theme.fn.smallerThan('sm')]: {
                    gridTemplateColumns: '1fr',
                  },
                },
              })}
              key={section.id}
              section={section}
              structuredTextProps={structuredTextBlocks}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Career;
