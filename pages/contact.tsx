import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';
import { Title, Box, createStyles } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps('contact');

const structuredTextProps = createStructuredTextProps({
  blocks: {
    Subsection: ({ children, section }) => {
      return (
        <Box
          sx={{
            boxShadow: '0 0 0 2px rgba(255,0,0,0.5)',
            minWidth: '50%',
            height: '100%',
          }}
        >
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

const useStyles = createStyles((theme) => {
  return {
    root: {
      [theme.fn.largerThan('sm')]: {
        paddingLeft: theme.spacing.xl,
        paddingRight: theme.spacing.xl,
      },
    },
    body: {
      width: theme.breakpoints.sm,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: theme.spacing.md,
      [theme.fn.smallerThan('sm')]: {
        gridTemplateColumns: '1fr',
      },
    },
  };
});

const Career = ({ data }: StaticPageProps) => {
  const { classes } = useStyles(undefined, { name: 'ContactSection' });
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
