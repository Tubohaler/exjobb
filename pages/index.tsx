import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';

export const getStaticProps = createGetStaticPageProps();

const Home = ({ data }: StaticPageProps) => {
  return (
    <PageWrapper
      data={data}
      sectionProps={(section) => ({
        fullscreen:
          section.content.links[0]?.__typename === 'ResponsiveVideoRecord',
      })}
    />
  );
};

export default Home;
