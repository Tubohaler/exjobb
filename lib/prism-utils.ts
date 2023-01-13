import type { Language } from 'prism-react-renderer';
const languages: Language[] = [
  'markup',
  'bash',
  'clike',
  'c',
  'cpp',
  'css',
  'javascript',
  'jsx',
  'coffeescript',
  'actionscript',
  'css-extr',
  'diff',
  'git',
  'go',
  'graphql',
  'handlebars',
  'json',
  'less',
  'makefile',
  'markdown',
  'objectivec',
  'ocaml',
  'python',
  'reason',
  'sass',
  'scss',
  'sql',
  'stylus',
  'tsx',
  'typescript',
  'wasm',
  'yaml',
];

export const isPrismLanguage = (value: unknown): value is Language => {
  return typeof value === 'string' && languages.includes(value as Language);
};
