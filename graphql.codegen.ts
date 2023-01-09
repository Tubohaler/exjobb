import type { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const scalars = {
  BooleanType: 'boolean',
  CustomData: 'Record<string, unknown>',
  Date: 'string',
  DateTime: 'string',
  FloatType: 'number',
  IntType: 'number',
  ItemId: 'string',
  JsonField: 'unkown',
  MetaTagAttributes: 'Record<string, string>',
  UploadId: 'string',
};

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: process.env.DATO_CMS_TOKEN || '',
          'X-Exclude-Invalid': 'true',
        },
      },
    },
  ],
  overwrite: true,
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  documents: [path.resolve('lib/dato-cms/graphql/**/*.graphql')],
  generates: {
    'lib/dato-cms/graphql/generated.ts': {
      config: {
        strictScalars: true,
        scalars,
        useTypeImports: true,
        enumsAsTypes: true,
        preResolveTypes: true,
        dedupeFragments: true,
      },
      plugins: ['typescript', 'typed-document-node', 'typescript-operations'],
    },
  },
};

export default config;
