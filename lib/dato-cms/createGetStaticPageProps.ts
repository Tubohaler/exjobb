import { GetStaticProps, PreviewData } from 'next';
import request from './request';
import createDevCache from './dev-cache/createDevCache';
import { PageDocument, PageQuery, StaticPageProps } from './graphql';
import { ParsedUrlQuery } from 'querystring';

const devMode = process.env.NODE_ENV === 'development';

export async function getStaticPageProps(
  urlSlug: string = '',
  devCacheMaxAge?: number
): Promise<StaticPageProps> {
  const cache = createDevCache(devCacheMaxAge);
  let data: PageQuery | null = null;
  if (devMode) data = await cache.get(urlSlug);
  if (data) return { data };

  data = await request(PageDocument, { urlSlug });
  if (devMode) await cache.set(urlSlug, data);

  return { data };
}

export default function createGetStaticPageProps<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
>(
  urlSlug?: string,
  devCacheMaxAge?: number
): GetStaticProps<StaticPageProps, Q, D> {
  return async () => {
    const props = await getStaticPageProps(urlSlug, devCacheMaxAge);
    return { props };
  };
}
