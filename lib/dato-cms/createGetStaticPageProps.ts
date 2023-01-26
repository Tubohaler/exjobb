import { GetStaticProps, PreviewData } from 'next';
import request from './request';
import { PageDocument, StaticPageProps } from './graphql';
import { ParsedUrlQuery } from 'querystring';
import replaceHtmlSections from './replaceHtmlSections';

export async function getStaticPageProps(
  urlSlug = ''
): Promise<StaticPageProps> {
  const data = await request(PageDocument, { urlSlug });
  return {
    data: { ...data, page: await replaceHtmlSections(data.page) },
  };
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
