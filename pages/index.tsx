import { Title } from '@mantine/core';
import Link from '@components/elements/links/Link';
import { Article, Head, Main, PageWrapper } from '@components/elements/layout';
import { Image, ResponsiveImageType } from 'react-datocms';

const Home = () => {
  return (
    <>
      <Head />
      <PageWrapper>
        <Article>
          <Title>
            <Link href="https://mightanddelight.com/">Might and Delight</Link>
            <Image data={{} as unknown as ResponsiveImageType} />
          </Title>
        </Article>
      </PageWrapper>
    </>
  );
};

export default Home;
