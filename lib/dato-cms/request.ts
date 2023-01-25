import { request as graphqlRequest, type Variables } from 'graphql-request';
import type { RequestDocument } from 'graphql-request/dist/types';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import headers from './request-headers';

export default function request<
  TDocument extends { [key: string]: unknown } = { [key: string]: unknown }
>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables
) {
  if (!process.env.DATO_CMS_TOKEN) {
    throw new Error(
      'DATO_CMS_TOKEN does not exist in environment variables. Please add it and try again.'
    );
  }
  return graphqlRequest<TDocument, Variables>(
    'https://graphql.datocms.com/',
    document,
    variables,
    headers
  );
}
