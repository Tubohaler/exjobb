import dotenv from 'dotenv';
dotenv.config();
import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

const tsPluginConfig: TypeScriptDocumentsPluginConfig = {
  scalars: {
    BooleanType: 'boolean',
    CustomData: 'Record<string, unknown>',
    Date: 'string',
    DateTime: 'string',
    FloatType: 'number',
    IntType: 'number',
    ItemId: 'string',
    JsonField: 'unknown',
    MetaTagAttributes: 'Record<string, string>',
    UploadId: 'string',
  },
  strictScalars: true,
  useTypeImports: true,
  preResolveTypes: true,
  avoidOptionals: true,
  dedupeFragments: true,
  nonOptionalTypename: true,
};

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: process.env.DATO_CMS_TOKEN || '',
          'X-Exclude-Invalid': 'true',
          'X-Api-Version': '3',
        },
      },
    },
  ],
  documents: ['lib/dato-cms/graphql/**/*.graphql'],
  generates: {
    'lib/dato-cms/graphql/generated.ts': {
      config: { ...tsPluginConfig, enumsAsTypes: true },
      plugins: ['typescript', 'typed-document-node', 'typescript-operations'],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
