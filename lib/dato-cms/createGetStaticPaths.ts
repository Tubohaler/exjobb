import fs from 'fs';
import path from 'path';

import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  PreviewData,
} from 'next';
import type { StaticPageProps } from './graphql';

import { getStaticPageProps } from './createGetStaticPageProps';
import getPageLinks from './getPageLinks';

export type StaticUrlParams<
  K extends string = string,
  L extends string | undefined = undefined
> = Record<K, string> & {
  locale: L;
};

const pagesDir = path.resolve('pages');
const pageFiles = !fs.existsSync(pagesDir)
  ? []
  : fs.readdirSync(pagesDir).filter((file) => /^[^_[][a-z_-]+.tsx$/.test(file));

const createGetStaticPaths = <
  K extends string = string,
  L extends string | undefined = undefined,
  D extends PreviewData = PreviewData
>(
  key: K,
  fallback: GetStaticPathsResult['fallback'] = false,
  locale?: L | ((urlSlug: string) => L),
  devCacheMaxAge?: number
): {
  getStaticPaths: GetStaticPaths<StaticUrlParams<K, L>>;
  getStaticProps: GetStaticProps<StaticPageProps, StaticUrlParams<K, L>, D>;
} => {
  return {
    getStaticPaths: async () => {
      const slugs = pageFiles.map((file) =>
        file.replace('.tsx', '').replace('index', '')
      );
      const pages = await getPageLinks();
      const paths = (
        pages
          .filter(({ urlSlug }) => urlSlug && !slugs.includes(urlSlug))
          .map(({ urlSlug }) => urlSlug) as string[]
      ).map((slug) => ({
        params: { [key]: slug },
        locale: typeof locale === 'function' ? locale(slug) : locale,
      })) as GetStaticPathsResult<StaticUrlParams<K, L>>['paths'];

      return {
        paths,
        fallback,
      };
    },
    getStaticProps: async (context) => {
      const props = await getStaticPageProps(
        !context.params ? undefined : context.params[key],
        devCacheMaxAge
      );
      return { props };
    },
  };
};

export default createGetStaticPaths;
