import dotenv from 'dotenv';
dotenv.config();
import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';

const scalars = {
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
};

const tsPluginConfig: TypeScriptDocumentsPluginConfig &
  Omit<TypeScriptPluginConfig, keyof TypeScriptDocumentsPluginConfig> = {
  scalars,
  strictScalars: true,
  useTypeImports: true,
  avoidOptionals: true,
  nonOptionalTypename: true,
  enumsAsTypes: true,
  dedupeFragments: true,
  preResolveTypes: false,
  skipTypeNameForRoot: true,
  declarationKind: 'interface',
};

const appendContent = `
export type PageName = 'home' | 'about' | 'contact' | 'career';

export interface SvgIconFragment extends IconFragment {
  mimeType: "image/svg+xml"
  inlineHTML?: string;
}

export interface StaticPageData extends PageQuery {
  allSocialLinks: Array<
    Omit<SocialLinkFragment, 'icon'> & {
      icon: SvgIconFragment;
    }
  >;
}

export type StaticPageProps = { data: StaticPageData };
`;

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
    'lib/dato-cms/graphql/index.ts': {
      config: tsPluginConfig,
      plugins: [
        { add: { content: appendContent, placement: 'append' } },
        'typescript',
        'typescript-operations',
        'typed-document-node',
      ],
    },
    'lib/dato-cms/graphql/introspection.json': {
      config: { minify: true },
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
};

export default config;
