import { PageDocument } from './graphql/generated';
import { GetStaticProps } from 'next';
import request from './request';
import type { PageName, StaticPageProps } from './types';
import createDevCache from './cache/createDevCache';

export default function createGetStaticPageProps<T extends PageName>(
  name: T,
  devCacheMaxAge?: number
): GetStaticProps<StaticPageProps> {
  if (process.env.NODE_ENV !== 'development') {
    return async () => {
      const data = await request(PageDocument, { name });
      return { props: { data } };
    };
  }
  const cache = createDevCache(devCacheMaxAge);
  return async () => {
    let data = await cache.get(name);
    if (!data) {
      data = await request(PageDocument, { name });
      await cache.set(name, data);
    }
    return { props: { data } };
  };
}
