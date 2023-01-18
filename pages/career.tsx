import PageWrapper from '@components/elements/layout/UpdatedPageWrapper';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';

export const getStaticProps = createGetStaticPageProps('career');

const Home = ({ data }: StaticPageProps) => {
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          return <PageSection key={section.id} section={section} />;
        })}
      </PageWrapper>
    </>
  );
};

export default Home;
