import { Title } from '@mantine/core';
import Link from '@components/elements/links/Link';
import { Article, PageWrapper } from '@components/elements/layout';
import Head from '@components/page/Head';

const Home = () => {
  return (
    <>
      <Head />
      <PageWrapper>
        <Article>
          <Title>
            <Link href="https://mightanddelight.com/">Might and Delight</Link>
          </Title>
        </Article>
      </PageWrapper>
    </>
  );
};

export default Home;
