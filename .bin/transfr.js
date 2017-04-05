#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const createZip = require('../lib/createZip');
const checkSize = require('../lib/checkSize');
const readFile = require('../lib/readFile');
const putFile = require('../lib/putFile');
const copy = require('../lib/copy');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .arguments('<files...>')
  .action((files) => {
    const filePaths = files.map(file => path.resolve(file));
    const fileName = path.basename(filePaths.length > 1 ? 'transfer.zip' : filePaths[0]);

    createZip(filePaths)
      .then(checkSize)
      .then(readFile)
      .then(putFile(fileName))
      .then(copy)
      .then(() => process.exit(0))
      .catch(err => process.exit(err.code || 1));
  });

program.parse(process.argv);
