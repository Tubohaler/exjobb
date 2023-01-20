import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import { createStyles } from '@mantine/core';

export const getStaticProps = createGetStaticPageProps();

const useVideoSectionStyles = createStyles((theme) => ({
  root: {
    padding: 0,
    minHeight: '80vh',
  },
  body: {
    width: '100%',
  },
}));

const Home = ({ data }: StaticPageProps) => {
  const { classes } = useVideoSectionStyles(undefined, {
    name: 'VideoSection',
  });
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          const isVideo =
            section.content.links[0]?.__typename === 'ResponsiveVideoRecord';
          return (
            <PageSection
              key={section.id}
              section={section}
              classNames={isVideo ? classes : undefined}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Home;
