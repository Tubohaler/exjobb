import { Title } from '@mantine/core';
import Link from '@components/elements/links/Link';
import { Article, Head, PageWrapper } from '@components/elements/layout';

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
