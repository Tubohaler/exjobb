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

const existingSlugs = ['', 'contact'];

const createGetStaticPaths = <
  K extends string = string,
  L extends string | undefined = undefined,
  D extends PreviewData = PreviewData
>(
  key: K,
  fallback: GetStaticPathsResult['fallback'] = false,
  locale?: L | ((urlSlug: string) => L)
): {
  getStaticPaths: GetStaticPaths<StaticUrlParams<K, L>>;
  getStaticProps: GetStaticProps<StaticPageProps, StaticUrlParams<K, L>, D>;
} => {
  return {
    getStaticPaths: async () => {
      const pages = await getPageLinks();
      const paths = (
        pages
          .filter(
            ({ urlSlug }) =>
              urlSlug !== null && !existingSlugs.includes(urlSlug)
          )
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
        !context.params ? undefined : context.params[key]
      );
      return { props };
    },
  };
};

export default createGetStaticPaths;
