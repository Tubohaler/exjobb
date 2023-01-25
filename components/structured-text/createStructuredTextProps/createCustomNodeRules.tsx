import React from 'react';
import {
  isRoot,
  isParagraph,
  isHeading,
  isList,
  isListItem,
  isSpan,
  isThematicBreak,
  isLink,
  isInlineItem,
  isBlockquote,
  Root,
  Paragraph,
  Heading,
  List,
  ListItem,
  Span,
  ThematicBreak,
  Link,
  Blockquote,
} from 'datocms-structured-text-utils';
import { renderNodeRule } from 'datocms-structured-text-generic-html-renderer';
import type {
  StructuredTextGraphQlResponseRecord,
  StructuredTextPropTypes,
} from 'react-datocms';
import DefaultNodeRules from './defaults/DefaultNodeRules';
import { Space } from '@mantine/core';
import type { NodeRules, NodeRuleFn } from './types';

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

  for (const [key, callback] of Object.entries(rules) as [
    keyof NodeRules,
    NodeRules[keyof NodeRules]
  ][]) {
    switch (key) {
      case 'Root':
        output.push(renderNodeRule(isRoot, callback as NodeRuleFn<Root>));
        break;
      case 'Paragraph':
        output.push(
          renderNodeRule(isParagraph, (ctx) => {
            return ctx.node.children.every(
              (child) => isSpan(child) && !child.value.trim()
            ) ? (
              <Space key={ctx.key} h="xl" />
            ) : ctx.node.children.every((child) => isInlineItem(child)) ? (
              <React.Fragment key={ctx.key}>{ctx.children}</React.Fragment>
            ) : (
              (callback as NodeRuleFn<Paragraph>)(ctx)
            );
          })
        );
        break;
      case 'Heading':
        output.push(renderNodeRule(isHeading, callback as NodeRuleFn<Heading>));
        break;
      case 'Link':
        output.push(renderNodeRule(isLink, callback as NodeRuleFn<Link>));
        break;
      case 'List':
        output.push(renderNodeRule(isList, callback as NodeRuleFn<List>));
        break;
      case 'ListItem':
        output.push(
          renderNodeRule(isListItem, callback as NodeRuleFn<ListItem>)
        );
        break;
      case 'Span':
        output.push(renderNodeRule(isSpan, callback as NodeRuleFn<Span>));
        break;
      case 'Blockquote':
        output.push(
          renderNodeRule(isBlockquote, callback as NodeRuleFn<Blockquote>)
        );
      case 'ThematicBreak':
        output.push(
          renderNodeRule(isThematicBreak, callback as NodeRuleFn<ThematicBreak>)
        );
        break;
    }
  }
  return output;
}
