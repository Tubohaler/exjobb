import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import PageSection from '@components/page/PageSection';

export const getStaticProps = createGetStaticPageProps();

const Home = ({ data }: StaticPageProps) => {
  return (
    <PageWrapper data={data}>
      {data.page?.sections.map((section) => {
        return (
          <PageSection
            key={section.id}
            section={section}
            fullscreen={
              section.content.links[0]?.__typename === 'ResponsiveVideoRecord'
            }
          />
        );
      })}
    </PageWrapper>
  );
};

export default Home;
