import { PageDocument, PageQuery } from './graphql/generated';
import { GetStaticProps } from 'next';
import request from './request';

export type PageName = 'home' | 'about' | 'contact' | 'career';
export type StaticPageProps = { data: PageQuery };

export default function createGetStaticPageProps<T extends PageName>(
  name: T
): GetStaticProps<StaticPageProps> {
  return async () => {
    const data = await request(PageDocument, { name });
    return { props: { data } };
  };
}
