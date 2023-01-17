import { GetStaticProps } from 'next';
import request from './request';
import createDevCache from './dev-cache/createDevCache';

import {
  PageDocument,
  PageName,
  StaticPageData,
  StaticPageProps,
} from './graphql';

import createStaticPageData from './createStaticPageData';

export default function createGetStaticPageProps<T extends PageName>(
  pageName: T,
  devCacheMaxAge?: number
): GetStaticProps<StaticPageProps> {
  const devMode = process.env.NODE_ENV === 'development';
  const cache = createDevCache(devCacheMaxAge);

  return async () => {
    let data: StaticPageData | null = null;
    if (devMode) data = await cache.get(pageName);
    if (data) return { props: { data } };

    const queryData = await request(PageDocument, { name: pageName });
    data = await createStaticPageData(queryData);
    if (devMode) await cache.set(pageName, data);
    if (!data) {
      throw new Error('Failed getting Static Page Data');
    }
    return { props: { data } };
  };
}
