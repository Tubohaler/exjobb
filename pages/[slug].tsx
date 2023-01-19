import { PageWrapper } from '@components/elements/layout';
import {
  getPageLinks,
  getStaticPageProps,
  StaticPageProps,
} from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import { GetStaticProps } from 'next';
import createGetStaticPaths, {
  StaticUrlParams,
} from '@lib/dato-cms/createGetStaticPaths';

export const getStaticPaths = createGetStaticPaths();

export const getStaticProps: GetStaticProps<
  StaticPageProps,
  StaticUrlParams
> = async (context) => {
  const props = await getStaticPageProps(context.params?.slug);
  return { props };
};

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
