import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import headers from './lib/dato-cms/request-headers';

const tsPluginConfig: TypeScriptDocumentsPluginConfig &
  Omit<TypeScriptPluginConfig, keyof TypeScriptDocumentsPluginConfig> = {
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
  avoidOptionals: true,
  nonOptionalTypename: true,
  dedupeFragments: true,
  declarationKind: 'interface',
};

const config: CodegenConfig = {
  schema: [
    {
      'https://graphql.datocms.com': {
        headers,
      },
    },
  ],
  documents: ['lib/dato-cms/graphql/**/*.graphql'],
  generates: {
    'lib/dato-cms/graphql/generated.ts': {
      config: tsPluginConfig,
      hooks: {
        afterOneFileWrite: ['ts-node scripts/dato-cms/extend-generated.ts'],
      },
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    // 'lib/dato-cms/graphql/introspection.json': {
    //   config: { minify: true },
    //   plugins: ['introspection'],
    // },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
