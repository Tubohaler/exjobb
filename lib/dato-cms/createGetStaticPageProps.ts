import { GetStaticProps } from 'next';
import request from './request';
import createDevCache, { DevCache } from './dev-cache/createDevCache';
import { isSvgIconFragment } from './typeGuard';
import { modifyInlineSvg } from '@lib/svg-utils';
import axios from 'axios';
import isSvg from 'is-svg';
import {
  PageDocument,
  PageQuery,
  PageName,
  StaticPageData,
  StaticPageProps,
} from './graphql';

const createStaticPageData = async (
  queryData: PageQuery
): Promise<StaticPageData> => {
  const allSocialLinks = queryData.socialLinks.map((record) => ({
    ...record,
    icon: { ...record.icon },
  })) as StaticPageData['allSocialLinks'];

  await Promise.all(
    allSocialLinks.map(
      (record) =>
        new Promise<void>((resolve) => {
          if (!isSvgIconFragment(record.icon)) return;
          axios
            .get(record.icon.url, {
              headers: { Accept: 'image/svg+xml' },
            })
            .then((res) => {
              if (res.headers['content-type'] !== 'image/svg+xml') {
                return;
              }
              const { data } = res;
              if (typeof data !== 'string' || !isSvg(data)) return;
              record.icon = {
                ...record.icon,
                inlineHTML:
                  modifyInlineSvg(data, ['title'], {
                    fill: 'currentColor',
                    width: `${record.icon.width}`,
                    height: `${record.icon.height}`,
                  }) || data,
              };
            })
            .catch((err) => {
              console.error(err instanceof Error ? err.message : err);
            })
            .finally(resolve);
        })
    )
  );

  return { ...queryData, allSocialLinks };
};

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

    const pageData = await request(PageDocument, { name: pageName });
    data = await createStaticPageData(pageData);

    if (devMode) await cache.set(pageName, data);

    return { props: { data } };
  };
}
