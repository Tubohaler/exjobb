import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';

export const getStaticProps = createGetStaticPageProps();

const Home = ({ data }: StaticPageProps) => {
  return <PageWrapper data={data} />;
};

export default Home;
