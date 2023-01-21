import { PageWrapper } from '@components/elements/layout';
import { StaticPageProps, createGetStaticPaths } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';

export const { getStaticPaths, getStaticProps } = createGetStaticPaths('slug');

const Page = ({ data }: StaticPageProps) => {
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

export default Page;
