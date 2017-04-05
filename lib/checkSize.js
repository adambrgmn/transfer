const fs = require('fs');
const path = require('path');
const progress = require('./progress');

module.exports = function checkSize(fileName) {
  const filePath = path.resolve(fileName);
  const spinner = progress('Just checking the filesize real quick');

  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stat) => {
      if (err) {
        spinner.fail(err.message);
        return reject(err);
      }

      const bytes = stat.size;
      const mbs = bytes / 1000000;

      if (mbs >= 10000) {
        spinner.fail(`Sorry, the file is too big, ${mbs}MB. Max file size is 10GB`);
        return reject(new Error('File is too large. Maximum filesize is 10GB'));
      }

      spinner.succeed('Everything is fine with the size, now moving on...');
      return resolve(fileName);
    });
  });
};
