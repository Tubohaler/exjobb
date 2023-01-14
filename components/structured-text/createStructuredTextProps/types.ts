import type {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
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

export interface BlockComponents {
  ResponsiveVideo: (props: ResponsiveVideoFragment) => JSX.Element;
}

export interface InlineComponents {
  Address: (props: AddressFragment) => JSX.Element;
  ImageGallery: (props: ImageGalleryFragment) => JSX.Element;
  PeopleGallery: (props: PeopleGalleryFragment) => JSX.Element;
  ProjectGallery: (props: ProjectGalleryFragment) => JSX.Element;
}

export interface NodeRules {
  Root: NodeRuleFn<Root>;
  Paragraph: NodeRuleFn<Paragraph>;
  Heading: NodeRuleFn<Heading>;
  List: NodeRuleFn<List>;
  ListItem: NodeRuleFn<ListItem>;
  Blockquote: NodeRuleFn<Blockquote>;
  Code: NodeRuleFn<Code>;
  ThematicBreak: NodeRuleFn<ThematicBreak>;
  Span: NodeRuleFn<Span>;
  Link: NodeRuleFn<Link>;
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
  blockComponents?: Partial<BlockComponents>;
  inlineComponents?: Partial<InlineComponents>;
  nodeRules?: Partial<NodeRules>;
  markRules?: Partial<MarkRules>;
  customMarkRules?: Record<string, MarkRuleFn<string>>;
}
