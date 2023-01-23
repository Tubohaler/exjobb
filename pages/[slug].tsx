import { PageWrapper } from '@components/elements/layout';
import { StaticPageProps, createGetStaticPaths } from '@lib/dato-cms';

export const { getStaticPaths, getStaticProps } = createGetStaticPaths('slug');

const Page = ({ data }: StaticPageProps) => {
  return <PageWrapper data={data} />;
};

export default Page;
