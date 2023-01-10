import { PageQuery } from './graphql/generated';

export type PageName = 'home' | 'about' | 'contact' | 'career';

export type StaticPageProps = { data: PageQuery };
