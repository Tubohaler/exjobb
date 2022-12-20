import Head from 'next/head';
import { Center, Stack, Title, Anchor } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Might and Delight</title>
        <meta
          name="description"
          content="Welcome to game studio Might and Delight"
        />
      </Head>
      <Center component="main" style={{ minHeight: '100vh' }}>
        <Title>
          <Link href={'https://mightanddelight.com/'}>Might and Delight</Link>
        </Title>
      </Center>
    </>
  );
}
