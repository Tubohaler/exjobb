import { PageWrapper } from '@components/elements/layout';
import { createGetStaticPageProps, StaticPageProps } from '@lib/dato-cms';
import Head from '@components/page/Head';
import PageSection from '@components/page/PageSection';
import PeopleGallery from '@components/content/PeopleGallery';

import createStructuredTextProps from '@components/structured-text/createStructuredTextProps';

const structuredTextProp = createStructuredTextProps({
  components: {
    PeopleGallery,
  },
});

export const getStaticProps = createGetStaticPageProps('studio');

const Studio = ({ data }: StaticPageProps) => {
  return (
    <>
      <Head />
      <PageWrapper data={data}>
        {data.page?.sections.map((section) => {
          return (
            <PageSection
              key={section.id}
              section={section}
              structuredTextProps={structuredTextProp}
            />
          );
        })}
      </PageWrapper>
    </>
  );
};

export default Studio;
