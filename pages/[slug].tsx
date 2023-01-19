import { PageWrapper } from '@components/elements/layout';
import {
  getPageLinks,
  getStaticPageProps,
  StaticPageProps,
} from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const pages = await getPageLinks();
  const paths = pages
    .filter(
      ({ urlSlug }) =>
        urlSlug && !['about', 'career', 'contact'].includes(urlSlug)
    )
    .map(({ urlSlug }) => ({
      params: {
        slug: urlSlug,
      },
    })) as { params: { slug: string } }[];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  StaticPageProps,
  { slug: string }
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
