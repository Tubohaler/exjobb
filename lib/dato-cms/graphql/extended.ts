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

export type HeaderSections = Exclude<
  Exclude<PageQuery['header'], null>['sections'],
  null
>;
export type FooterSections = Exclude<
  Exclude<PageQuery['footer'], null>['sections'],
  null
>;

export type HeaderSectionContent = HeaderSections[number]['content'];
export type FooterSectionContent = FooterSections[number]['content'];

export interface StaticPageHeader extends Exclude<PageQuery['header'], null> {
  sections: HeaderSections & {
    content:
      | (HeaderSectionContent & {
          links: Array<
            HeaderSectionContent['links'][number] | StaticSocialLinksCollection
          >;
        })
      | null;
  };
}

export interface StaticPageFooter extends Exclude<PageQuery['footer'], null> {
  sections: FooterSections & {
    content:
      | (FooterSectionContent & {
          links: Array<
            FooterSectionContent['links'][number] | StaticSocialLinksCollection
          >;
        })
      | null;
  };
}

export interface StaticPageData extends PageQuery {
  header: StaticPageHeader | null;
  footer: StaticPageFooter | null;
}

export type StaticPageProps = { data: StaticPageData };
export type PageName = 'home' | 'about' | 'contact' | 'career';
