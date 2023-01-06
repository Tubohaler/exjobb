import type { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

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
  documents: [path.resolve('lib/cms/graphql/**/*.graphql')],
  generates: {
    'lib/cms/graphql/generated.ts': {
      config: {
        strictScalars: true,
        scalars: {
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
        },
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
