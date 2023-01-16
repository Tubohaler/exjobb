import type { NodeRules } from '@components/structured-text/createStructuredTextProps/types';
import type { Link as LinkNode } from 'datocms-structured-text-utils';
import Link, { LinkProps } from '@components/elements/links/Link';
import {
  Text,
  Title,
  List as List,
  Blockquote,
  Code,
  Divider,
} from '@mantine/core';
import { Prism } from '@mantine/prism';
import { isPrismLanguage } from '@lib/prism-utils';
import React from 'react';

const getLinkPropsFromMeta = (meta: LinkNode['meta']): Partial<LinkProps> => {
  if (!meta) return {};
  const props: Partial<LinkProps> = {
    rel: undefined,
    target: undefined,
    title: undefined,
  };
  for (const { id, value } of meta) {
    if (id in props) props[id as keyof LinkProps] = value;
  }
  return props;
};

const DefaultNodeRules: Partial<NodeRules> = {
  Root: ({ key, children }) => (
    <React.Fragment key={key}>{children}</React.Fragment>
  ),
  Paragraph: ({ key, children }) => {
    return <Text key={key}>{children}</Text>;
  },
  Heading: ({ key, children, node }) => {
    return (
      <Title key={key} order={node.level}>
        {children}
      </Title>
    );
  },
  List: ({ key, children, node }) => {
    return (
      <List
        key={key}
        type={node.style === 'numbered' ? 'ordered' : 'unordered'}
      >
        {children}
      </List>
    );
  },
  ListItem: ({ key, children }) => {
    return <List.Item key={key}>{children}</List.Item>;
  },
  Blockquote: ({ key, children, node }) => {
    return (
      <Blockquote key={key} cite={node.attribution}>
        {children}
      </Blockquote>
    );
  },
  Code: ({ key, node: { code, language } }) => {
    return isPrismLanguage(language) ? (
      <Prism key={key} language={language}>
        {code}
      </Prism>
    ) : (
      <Code key={key}>{code}</Code>
    );
  },
  ThematicBreak: ({ key }) => {
    return <Divider key={key} my="md" />;
  },
  Link: ({ key, children, node: { url, meta } }) => {
    const metaProps = getLinkPropsFromMeta(meta);
    return (
      <Link key={key} href={url} {...metaProps}>
        {children}
      </Link>
    );
  },
};

export default DefaultNodeRules;
