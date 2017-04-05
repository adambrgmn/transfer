const AdmZip = require('adm-zip');
const progress = require('./progress');

module.exports = function createZip(filePaths) {
  if (filePaths.length === 1) {
    return Promise.resolve(filePaths[0]);
  }

  const spinner = progress('Bundling all files into a zip-file');

  try {
    const zip = new AdmZip();

    filePaths.forEach(file => zip.addLocalFile(file));
    const buffer = zip.toBuffer();

    spinner.succeed('Zip file created and ready to send');
    return Promise.resolve(buffer);
  } catch (err) {
    spinner.fail(err.message);
    return Promise.reject(err);
  }
};
