const fs = require('fs');
const path = require('path');
const { Buffer } = require('buffer');
const progress = require('./progress');

function check(bytes, cb) {
  const mbs = bytes / 1000000;

  if (mbs > 10000) {
    const error = new Error(`File is too large, ${mbs}MB. Maximum filesize is 10GB`);
    return cb(error);
  }

  return cb();
}

module.exports = function checkSize(file) {
  const spinner = progress('Just checking the filesize real quick');

  return new Promise((resolve, reject) => {
    const isBuffer = Buffer.isBuffer(file);
    const checkCb = (err) => {
      if (err) {
        spinner.fail(err.message);
        return reject(err);
      }

      spinner.succeed('Everything is fine with the size, now moving on...');
      return resolve(file);
    };

    if (isBuffer) {
      check(file.length, checkCb);
    } else {
      const filePath = path.resolve(file);

      fs.stat(filePath, (err, stat) => {
        if (err) {
          spinner.fail(err.message);
          return reject(err);
        }

        const bytes = stat.size;
        return check(bytes, checkCb);
      });
    }
  });
};
