import type {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  SubsectionFragment,
  CurrentVacanciesFragment,
  StaticSocialLinksCollectionFragment,
  SocialLinksCollectionFragment,
  NavLinkCollectionFragment,
} from '@lib/dato-cms';
import { StructuredTextPropTypes } from 'react-datocms';
import type { RenderMarkRule } from 'datocms-structured-text-generic-html-renderer';
import type {
  Heading,
  Node as StructuredTextNode,
  RenderContext,
  TrasformFn,
  DefaultMark,
  Root,
  Block,
  Blockquote,
  Code,
  List,
  ListItem,
  Paragraph,
  ThematicBreak,
  InlineItem,
  ItemLink,
  Link,
  Span,
  RenderRule,
} from 'datocms-structured-text-utils';

type RenderMarkContext<
  H extends TrasformFn,
  T extends TrasformFn,
  F extends TrasformFn,
  M extends string = DefaultMark
> = Parameters<RenderMarkRule<H, T, F>['apply']>[0] & { mark: M };

export type NodeRuleFn<
  N extends StructuredTextNode,
  H extends TrasformFn = TrasformFn,
  T extends TrasformFn = TrasformFn,
  F extends TrasformFn = TrasformFn
> = (context: RenderContext<H, T, F, N>) => JSX.Element;

export type MarkRuleFn<
  M extends string,
  H extends TrasformFn = TrasformFn,
  T extends TrasformFn = TrasformFn,
  F extends TrasformFn = TrasformFn
> = (context: RenderMarkContext<H, T, F, M>) => JSX.Element;

export type DefaultMarkRuleFn<
  M extends DefaultMark,
  H extends TrasformFn = TrasformFn,
  T extends TrasformFn = TrasformFn,
  F extends TrasformFn = TrasformFn
> = MarkRuleFn<M, H, T, F>;

/**
 * Components used to render blocks in StructuredText (based on custom blocks in Might and Delight DatoCMS setup)
 *
 * @see {@link https://www.datocms.com/docs/structured-text/dast#block}
 */
export interface BlockComponents {
  /** @see SubsectionFragment */
  Subsection: (props: {
    children?: React.ReactNode;
    section: SubsectionFragment;
  }) => JSX.Element;
}

/**
 * Components used to render inline items in StructuredText (based on custom records in Might and Delight DatoCMS setup)
 *
 * @see {@link https://www.datocms.com/docs/structured-text/dast#inlineItem}
 */
export interface InlineComponents {
  /** @see AddressFragment */
  Address: (props: AddressFragment) => JSX.Element;
  /** @see ImageGalleryFragment */
  ImageGallery: (props: ImageGalleryFragment) => JSX.Element;
  /**
   * @see PeopleGalleryFragment
   * @see StaffFragment
   */
  PeopleGallery: (props: PeopleGalleryFragment) => JSX.Element;
  /**
   * @see ProjectGalleryFragment
   * @see ProjectFragment
   */
  ProjectGallery: (props: ProjectGalleryFragment) => JSX.Element;
  /** @see ResponsiveVideoFragment */
  ResponsiveVideo: (props: ResponsiveVideoFragment) => JSX.Element;
  /** @see CurrentVacanciesFragment */
  CurrentVacancies: (props: CurrentVacanciesFragment) => JSX.Element;
  /**
   * @see StaticSocialLinksCollectionFragment
   * @see SocialLinksCollectionFragment
   */
  SocialLinks: (props: StaticSocialLinksCollectionFragment) => JSX.Element;
  /** @see NavLinkCollectionFragment */
  NavLinks: (props: NavLinkCollectionFragment) => JSX.Element;
}

export interface NodeRules {
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#root} */
  Root: NodeRuleFn<Root>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#paragraph} */
  Paragraph: NodeRuleFn<Paragraph>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#heading} */
  Heading: NodeRuleFn<Heading>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#span} */
  Span: NodeRuleFn<Span>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#link} */
  Link: NodeRuleFn<Link>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#list} */
  List: NodeRuleFn<List>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#listItem} */
  ListItem: NodeRuleFn<ListItem>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#blockquote} */
  Blockquote: NodeRuleFn<Blockquote>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#code} */
  Code: NodeRuleFn<Code>;
  /** @see {@link https://www.datocms.com/docs/structured-text/dast#thematicBreak} */
  ThematicBreak: NodeRuleFn<ThematicBreak>;
}

export interface MarkRules {
  strong: DefaultMarkRuleFn<'strong'>;
  code: DefaultMarkRuleFn<'code'>;
  emphasis: DefaultMarkRuleFn<'emphasis'>;
  underline: DefaultMarkRuleFn<'underline'>;
  strikethrough: DefaultMarkRuleFn<'strikethrough'>;
  highlight: DefaultMarkRuleFn<'highlight'>;
}

export interface CreateStructuredTextPropsConfig {
  /**
   * Components to render Block Components
   * @see BlockComponents
   */
  blockComponents?: Partial<BlockComponents>;
  /**
   * Components to render Inline Components
   * @see InlineComponents
   */
  inlineComponents?: Partial<InlineComponents>;
  /**
   * Callbacks to render default nodes:
   * @see NodeRules
   * @see {@link https://www.datocms.com/docs/structured-text/dast}
   */
  nodeRules?: Partial<NodeRules>;
  /**
   * Callbacks to render default marks (inside nodes):
   * @see MarkRules
   */
  markRules?: Partial<MarkRules>;
  /**
   * Callbacks to render custom marks
   */
  customMarkRules?: Record<string, MarkRuleFn<string>>;
}
