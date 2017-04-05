#!/usr/bin/env node

const path = require('path');
const program = require('commander');
const checkSize = require('../lib/checkSize');
const putFile = require('../lib/putFile');
const copy = require('../lib/copy');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description(pkg.description)
  .arguments('<file>')
  .action((file) => {
    const filePath = path.resolve(file);

    checkSize(filePath)
      .then(putFile)
      .then(copy)
      .then(() => process.exit(0))
      .catch(() => process.exit(1));
  });

program.parse(process.argv);
