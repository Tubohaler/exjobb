import fs from 'fs';
import path from 'path';
import type { GetStaticPaths } from 'next';
import getPageLinks from './getPageLinks';

const pagesDir = path.resolve('pages');

export type StaticUrlParams = { slug: string };

const createGetStaticPaths = (): GetStaticPaths<StaticUrlParams> => {
  return async () => {
    const files = await fs.promises.readdir(pagesDir);
    const slugs = files
      .filter((file) => /^[^_[][a-z_-]+.tsx$/.test(file))
      .map((file) => file.replace('.tsx', '').replace('index', ''));

    const pages = await getPageLinks();
    const paths: { params: StaticUrlParams }[] = (
      pages
        .filter(({ urlSlug }) => urlSlug && !slugs.includes(urlSlug))
        .map(({ urlSlug }) => urlSlug) as string[]
    ).map((slug) => ({ params: { slug } }));

    return {
      paths,
      fallback: false,
    };
  };
};

export default createGetStaticPaths;
