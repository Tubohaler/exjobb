import {
  AddressFragment,
  ImageGalleryFragment,
  PeopleGalleryFragment,
  ProjectFragment,
  ProjectGalleryFragment,
  ResponsiveVideoFragment,
  StaffFragment,
} from '@lib/dato-cms';
import {
  renderMarkRule,
  renderNodeRule,
  StructuredText,
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';

import {
  defaultBlockComponents,
  defaultInlineComponents,
  defaultNodeRules,
  defaultMarkRules,
} from './defaults';
import {
  CreateStructuredTextPropsConfig,
  BlockComponents,
  InlineComponents,
  NodeRules,
  MarkRules,
  NodeRuleFn,
  MarkRuleFn,
} from './types';
import { StaticPageData } from '@lib/dato-cms';
import {
  hasChildren,
  Heading,
  isHeading,
  isLink,
  isList,
  isListItem,
  isParagraph,
  isRoot,
  isSpan,
  isThematicBreak,
  Link,
  List,
  ListItem,
  Paragraph,
  Root,
  Span,
  ThematicBreak,
} from 'datocms-structured-text-utils';

function inferType<T = StructuredTextGraphQlResponseRecord>(
  record: StructuredTextGraphQlResponseRecord
): T {
  return record as unknown as T;
}

type InlineTypeNames = Exclude<
  Exclude<StaticPageData['page'], null>['sections'][number]['content']['links'],
  null
>[number]['__typename'];

type BlockTypeNames = Exclude<
  Exclude<
    StaticPageData['page'],
    null
  >['sections'][number]['content']['blocks'],
  null
>[number]['__typename'];

export function createRenderBlock<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  blockComponents?: Partial<BlockComponents>
): StructuredTextPropTypes<R1, R2>['renderBlock'] {
  const components = !blockComponents
    ? defaultBlockComponents
    : { ...defaultBlockComponents, ...blockComponents };

  return ({ record }) => {
    const typename = record.__typename as BlockTypeNames | 'unknown';
    switch (typename) {
      case 'ResponsiveVideoRecord':
        return components.ResponsiveVideo(
          inferType<ResponsiveVideoFragment>(record)
        );
      default:
        return null;
    }
  };
}

export function createRenderInlineRecord<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  inlineComponents?: Partial<InlineComponents>
): StructuredTextPropTypes<R1, R2>['renderInlineRecord'] {
  const components = !inlineComponents
    ? defaultInlineComponents
    : { ...defaultInlineComponents, ...inlineComponents };

  return ({ record }) => {
    const typename = record.__typename as InlineTypeNames | 'unknown';
    switch (typename) {
      case 'AddressRecord':
        return components.Address(inferType<AddressFragment>(record));
      case 'ImageGalleryRecord':
        return components.ImageGallery(inferType<ImageGalleryFragment>(record));
      case 'PeopleGalleryRecord':
        return components.PeopleGallery(
          inferType<PeopleGalleryFragment>(record)
        );
      case 'ProjectGalleryRecord':
        return components.ProjectGallery(
          inferType<ProjectGalleryFragment>(record)
        );
      default:
        return null;
    }
  };
}

export function createCustomNodeRules<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  nodeRules?: Partial<NodeRules>
): StructuredTextPropTypes<R1, R2>['customNodeRules'] {
  const rules = !nodeRules
    ? defaultNodeRules
    : { ...defaultNodeRules, ...nodeRules };
  const output: StructuredTextPropTypes<R1, R2>['customNodeRules'] = [];

  for (const [key, fn] of Object.entries(rules) as [
    keyof NodeRules,
    NodeRules[keyof NodeRules]
  ][]) {
    switch (key) {
      case 'Root':
        output.push(renderNodeRule(isRoot, fn as NodeRuleFn<Root>));
        break;
      case 'Paragraph':
        output.push(
          renderNodeRule(isParagraph, (ctx) => {
            return hasChildren(ctx.node) &&
              ctx.node.children.every(
                (child) => child.type === 'inlineItem'
              ) ? (
              <>{ctx.children}</>
            ) : (
              (fn as NodeRuleFn<Paragraph>)(ctx)
            );
          })
        );
        break;
      case 'Heading':
        output.push(renderNodeRule(isHeading, fn as NodeRuleFn<Heading>));
        break;
      case 'List':
        output.push(renderNodeRule(isList, fn as NodeRuleFn<List>));
        break;
      case 'ListItem':
        output.push(renderNodeRule(isListItem, fn as NodeRuleFn<ListItem>));
        break;
      case 'Span':
        output.push(renderNodeRule(isSpan, fn as NodeRuleFn<Span>));
        break;
      case 'ThematicBreak':
        output.push(
          renderNodeRule(isThematicBreak, fn as NodeRuleFn<ThematicBreak>)
        );
        break;
      case 'Link':
        output.push(renderNodeRule(isLink, fn as NodeRuleFn<Link>));
        break;
    }
  }
  return output;
}

export function createCustomMarkRules<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  markRules?: Partial<MarkRules>,
  customMarkRules?: CreateStructuredTextPropsConfig['customMarkRules']
): StructuredTextPropTypes<R1, R2>['customMarkRules'] {
  const rules = !markRules
    ? defaultMarkRules
    : { ...defaultMarkRules, ...markRules };

  return Object.entries({ ...rules, ...(customMarkRules || {}) }).map(
    ([key, fn]) => renderMarkRule(key, fn as MarkRuleFn<typeof key>)
  );
}

export default function createStructuredTextProps<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  config?: CreateStructuredTextPropsConfig
): Partial<StructuredTextPropTypes<R1, R2>> {
  return {
    renderBlock: createRenderBlock<R1, R2>(config?.blockComponents),
    renderInlineRecord: createRenderInlineRecord<R1, R2>(
      config?.inlineComponents
    ),
    customNodeRules: createCustomNodeRules<R1, R2>(config?.nodeRules),
    customMarkRules: createCustomMarkRules<R1, R2>(
      config?.markRules,
      config?.customMarkRules
    ),
  };
}
