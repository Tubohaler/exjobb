import React from 'react';
import {
  isRoot,
  Root,
  isParagraph,
  hasChildren,
  Paragraph,
  isHeading,
  Heading,
  isList,
  List,
  isListItem,
  ListItem,
  isSpan,
  Span,
  isThematicBreak,
  ThematicBreak,
  isLink,
  Link,
} from 'datocms-structured-text-utils';
import { renderNodeRule } from 'datocms-structured-text-generic-html-renderer';
import type {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import type { NodeRules, NodeRuleFn } from './types';
import DefaultNodeRules from './defaults/DefaultNodeRules';

export default function createCustomNodeRules<
  R1 extends StructuredTextGraphQlResponseRecord,
  R2 extends StructuredTextGraphQlResponseRecord = R1
>(
  nodeRules?: Partial<NodeRules>
): StructuredTextPropTypes<R1, R2>['customNodeRules'] {
  const rules = !nodeRules
    ? DefaultNodeRules
    : { ...DefaultNodeRules, ...nodeRules };
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
              <React.Fragment key={ctx.key}>{ctx.children}</React.Fragment>
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
