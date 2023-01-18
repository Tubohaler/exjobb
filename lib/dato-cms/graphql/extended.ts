import type {
  IconFragment,
  SocialLinkFragment,
  PageQuery,
  SocialLinksCollectionFragment,
} from './generated';

export interface SvgIconFragment extends IconFragment {
  mimeType: 'image/svg+xml';
  inlineHTML?: string;
}

export interface StaticSocialLink extends SocialLinkFragment {
  icon: SvgIconFragment;
}

export interface StaticSocialLinksCollection
  extends SocialLinksCollectionFragment {
  links: StaticSocialLink[];
}

export type FooterSections = Exclude<PageQuery['footer'], null>['sections'];

export type FooterSectionContent = FooterSections[number]['content'];

export interface StaticPageHeader extends Exclude<PageQuery['header'], null> {
  socialLinks: StaticSocialLinksCollection;
}

export interface StaticPageFooter extends Exclude<PageQuery['footer'], null> {
  sections: FooterSections & {
    content:
      | FooterSectionContent & {
          links: Array<
            FooterSectionContent['links'][number] | StaticSocialLinksCollection
          >;
        };
  };
}

export interface StaticPageData extends PageQuery {
  header: StaticPageHeader | null;
  footer: StaticPageFooter | null;
}

export type StaticPageProps = { data: StaticPageData };
export type PageName = 'home' | 'about' | 'contact' | 'career';
