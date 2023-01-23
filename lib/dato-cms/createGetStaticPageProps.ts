import { GetStaticProps, PreviewData } from 'next';
import request from './request';
import { PageDocument, StaticPageProps } from './graphql';
import { ParsedUrlQuery } from 'querystring';

export async function getStaticPageProps(
  urlSlug: string = ''
): Promise<StaticPageProps> {
  const data = await request(PageDocument, { urlSlug });
  return { data };
}

export default function createGetStaticPageProps<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(urlSlug?: string): GetStaticProps<StaticPageProps, Q, D> {
  return async () => {
    const props = await getStaticPageProps(urlSlug);
    return { props };
  };
}
