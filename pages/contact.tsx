import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, Box } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');
const props = createStructuredTextProps({
  blocks: {
    Subsection: ({ children, section }) => {
      return (
        <Box
          sx={(theme) => ({
            /*    display:"grid", */
            /* flexBasis:"20vw" */
          })}
        >
          {section.title && (
            <Title order={3} italic size="h4">
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
                  justifyContent: 'center',
                  display: 'flex',
                },
                body: {
                  padding: theme.spacing.xl,

                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: theme.spacing.xl,
                  /*  flexDirection:"column",
                    flexWrap:"wrap",
                    maxHeight:"70vh",
                    gap:theme.spacing.md */
                  /* columnCount:2,
                    columnWidth:"50%",
                    columnFill:"balance" */
                  /* gridTemplateColumns: 'repeat(2, 1fr)', */

                  /*  alignContent:"center" */
                  /*      alignContent: 'center',
                    justifyItems: 'center',
                    alignItems:"center",
                    justifyContent:"center", */

                  /*       [theme.fn.largerThan('md')]: { gridTemplateColumns: 'repeat(4, 1fr)' }, */
                },
              })}
              key={section.id}
              section={section}
              structuredTextProps={props}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Career;
