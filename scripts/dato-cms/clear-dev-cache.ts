import fs from 'fs';
import path from 'path';

const cacheDir = path.resolve('lib/dato-cms/dev-cache');

(() => {
  if (!fs.existsSync(cacheDir)) {
    throw new Error(`Directory '${cacheDir}' not found!`);
  }
  const files = fs
    .readdirSync(cacheDir)
    .filter((file) => path.extname(file) === '.json');
  if (!files.length) return;
  console.log("Clearing 'dev-cache'");
  files.forEach((file) => {
    fs.rmSync(path.join(cacheDir, file));
  });
  console.log('');
})();
