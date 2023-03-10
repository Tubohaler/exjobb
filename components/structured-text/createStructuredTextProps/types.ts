import type {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  CoverVideoFragment,
  SubsectionFragment,
  CurrentVacanciesFragment,
  SocialLinksCollectionFragment,
  PageLinkFragment,
} from '@lib/dato-cms';
import type { RenderMarkRule } from 'datocms-structured-text-generic-html-renderer';
import type {
  Heading,
  Node as StructuredTextNode,
  RenderContext,
  TrasformFn,
  DefaultMark,
  Root,
  Blockquote,
  Code,
  List,
  ListItem,
  Paragraph,
  ThematicBreak,
  InlineItem,
  Link,
  Span,
} from 'datocms-structured-text-utils';
import { RenderRecordLinkContext } from 'react-datocms';

export interface EmptyParagraph extends Paragraph {
  children: Span[];
}

export interface InlineParagraph extends Paragraph {
  children: InlineItem[];
}

export type RenderMarkContext<
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
export interface StructuredTextComponents {
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
  /** @see CoverVideoFragment */
  CoverVideo: (props: CoverVideoFragment) => JSX.Element;
  /** @see CurrentVacanciesFragment */
  CurrentVacancies: (props: CurrentVacanciesFragment) => JSX.Element;
  /** @see SocialLinksCollectionFragment */
  SocialLinks: (props: SocialLinksCollectionFragment) => JSX.Element;
}

/**
 * Components used to render links to CMS Records items in StructuredText
 *
 * @see {@link https://www.datocms.com/docs/structured-text/dast#itemLink}
 */
export interface RecordLinkComponents {
  /** @see PageLinkFragment */
  Page: (context: RenderRecordLinkContext<PageLinkFragment>) => JSX.Element;
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
   * Components to render Inline Records
   * @see StructuredTextComponents
   */
  components?: Partial<StructuredTextComponents>;
  /**
   * Components to render Blocks
   * @see BlockComponents
   */
  blocks?: Partial<BlockComponents>;
  /**
   * Components to render links to records
   * @see RecordLinkComponents
   */
  recordLinks?: Partial<RecordLinkComponents>;
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
