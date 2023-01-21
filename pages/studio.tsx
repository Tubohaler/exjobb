import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import PageSection from '@components/page/PageSection';

export const getStaticProps = createGetStaticPageProps('studio');

const Studio = ({ data }: StaticPageProps) => {
  return (
    <PageWrapper data={data}>
      {data.page?.sections.map((section) => {
        return <PageSection key={section.id} section={section} />;
      })}
    </PageWrapper>
  );
};

export default Studio;
