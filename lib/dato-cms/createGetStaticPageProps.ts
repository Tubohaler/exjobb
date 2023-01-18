import { GetStaticProps } from 'next';
import request from './request';
import createDevCache from './dev-cache/createDevCache';

import { PageDocument, PageName, PageQuery, StaticPageProps } from './graphql';

export default function createGetStaticPageProps<T extends PageName>(
  pageName: T,
  devCacheMaxAge?: number
): GetStaticProps<StaticPageProps> {
  const devMode = process.env.NODE_ENV === 'development';
  const cache = createDevCache(devCacheMaxAge);

  return async () => {
    let data: PageQuery | null = null;
    if (devMode) data = await cache.get(pageName);
    if (data) return { props: { data } };

    data = await request(PageDocument, { name: pageName });
    if (devMode) await cache.set(pageName, data);

    return { props: { data } };
  };
}
