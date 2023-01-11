import {
  PageQuery,
  SocialLinkFragment,
  SvgIconFragment,
} from './graphql/generated';

export type PageName = 'home' | 'about' | 'contact' | 'career';

export interface StaticPageData extends PageQuery {
  allSocialLinks: Array<
    SocialLinkFragment & {
      icon: SvgIconFragment;
    }
  >;
}

export type StaticPageProps = { data: StaticPageData };
