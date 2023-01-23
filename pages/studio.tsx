import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';

export const getStaticProps = createGetStaticPageProps('studio');

const Studio = ({ data }: StaticPageProps) => {
  return <PageWrapper data={data} />;
};

export default Studio;
