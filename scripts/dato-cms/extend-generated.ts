import request from '../../lib/dato-cms/request';
import { PageNamesDocument } from '../../lib/dato-cms/graphql/generated';
import codegenConfig from '../../graphql.codegen';
import path from 'path';
import fs from 'fs';

const generatedPath = Object.keys(codegenConfig.generates)[0];

const createPageNameType = async () => {
  const { pages } = await request(PageNamesDocument);
  const names = pages.map(({ name }) => `"${name}"`);
  return `export type PageName = ${names.join(' | ')};`;
};

const regExp = /export\s+type\s+PageName\b[^;]*;/g;

(async () => {
  try {
    if (process.argv[2] !== generatedPath || !fs.existsSync(generatedPath)) {
      return;
    }
    const extendedPath = path.join(
      path.dirname(path.resolve(generatedPath)),
      'extended.ts'
    );

    if (process.argv[2] !== generatedPath || !fs.existsSync(extendedPath)) {
      return;
    }

    const buffer = await fs.promises.readFile(extendedPath, 'utf-8');
    let output = buffer.toString() + (await createPageNameType());

    const pageNames = await createPageNameType();
    if (regExp.test(output)) {
      output = output.replaceAll(regExp, '');
    }

    await fs.promises.writeFile(extendedPath, `${output}\n${pageNames}`);
  } catch (err) {
    console.log(err instanceof Error ? err.message : err);
  }
})();