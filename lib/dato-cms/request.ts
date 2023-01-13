import { request as graphqlRequest, type Variables } from 'graphql-request';
import type { RequestDocument } from 'graphql-request/dist/types';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

export default function request<
  TDocument extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  const headers = {
    Authorization: process.env.DATO_CMS_TOKEN || '',
    'X-Exclude-Invalid': 'true',
    'X-Api-Version': '3',
  };
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    headers
  );
}
