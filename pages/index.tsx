import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';

export const getStaticProps = createGetStaticPageProps();

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
                body: {
                  '&:first-of-type': {
                    maxWidth: '100%',
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
