const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');
const { Buffer } = require('buffer');

module.exports = function readFile(file) {
  const isBuffer = Buffer.isBuffer(file);

  if (isBuffer) {
    const stream = new PassThrough();
    stream.end(file);
    return stream;
  }

  const filePath = path.resolve(file);
  return fs.createReadStream(filePath);
};
