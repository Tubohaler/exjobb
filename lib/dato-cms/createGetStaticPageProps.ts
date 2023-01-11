import { PageDocument, PageQuery } from './graphql/generated';
import { GetStaticProps } from 'next';
import request from './request';
import type { PageName, StaticPageData, StaticPageProps } from './types';
import createDevCache from './cache/createDevCache';
import { isSvgIconFragment } from './typeGuard';
import axios from 'axios';
import isSvg from 'is-svg';

const createStaticPageData = async (
  queryData: PageQuery
): Promise<StaticPageData> => {
  const allSocialLinks = queryData.allSocialLinks.map((record) => ({
    ...record,
    icon: { ...record.icon },
  })) as StaticPageData['allSocialLinks'];
  await Promise.all(
    allSocialLinks.map(
      (record) =>
        new Promise<void>((resolve) => {
          if (!isSvgIconFragment(record.icon)) return resolve();
          axios
            .get(record.icon.url, {
              headers: { Accept: 'image/svg+xml' },
            })
            .then((res) => {
              if (res.headers['content-type'] !== 'image/svg+xml') {
                return resolve();
              }
              const { data } = res;
              if (typeof data !== 'string' || !isSvg(data)) return resolve();
              record.icon = { ...record.icon, inlineHTML: data };
              resolve();
            })
            .catch(() => resolve());
        })
    )
  );

  return { ...queryData, allSocialLinks };
};

export default function createGetStaticPageProps<T extends PageName>(
  name: T,
  devCacheMaxAge?: number
): GetStaticProps<StaticPageProps> {
  if (process.env.NODE_ENV !== 'development') {
    return async () => {
      const data = await request(PageDocument, { name });
      return { props: { data: await createStaticPageData(data) } };
    };
  }
  const cache = createDevCache(devCacheMaxAge);
  return async () => {
    let data = await cache.get(name);
    if (!data) {
      const pageData = await request(PageDocument, { name });
      data = await createStaticPageData(pageData);
      await cache.set(name, data);
    }
    return { props: { data } };
  };
}
