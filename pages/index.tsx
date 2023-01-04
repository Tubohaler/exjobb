import { Title, Anchor } from '@mantine/core';
import { Article, Head, Main, PageWrapper } from '@components/elements/layout';

const Home = () => {
  return (
    <>
      <Head />
      <PageWrapper>
        <Main
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Article>
            <Title>
              <Anchor href="https://mightanddelight.com/">
                Might and Delight
              </Anchor>
            </Title>
          </Article>
        </Main>
      </PageWrapper>
    </>
  );
};

export default Home;
