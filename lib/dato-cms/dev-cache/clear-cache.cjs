const fs = require('fs');
const path = require('path');

const files = fs
  .readdirSync(__dirname)
  .filter((file) => path.extname(file) === '.json');
if (files.length) {
  console.log("Clearing 'dev-cache'");
  files.forEach((file) => {
    fs.rmSync(path.join(__dirname, file));
  });
  console.log('');
}
