import PageWrapper from '@components/elements/layout/UpdatedPageWrapper';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';

export const getStaticProps = createGetStaticPageProps('home');

const Home = ({ data }: StaticPageProps) => {
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          return (
            <PageSection
              key={section.id}
              section={section}
              styles={() => ({
                root: {
                  '&:first-of-type': {
                    padding: 0,
                    justifyContent: 'center',
                    height: 'fit-content',
                    minHeight: '90vh',
                  },
                },
              })}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Home;
