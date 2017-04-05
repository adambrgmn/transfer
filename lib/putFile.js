const got = require('got');
const concat = require('concat-stream');
const pump = require('pump');
const { URL } = require('url');
const progress = require('./progress');
const pkg = require('../package.json');

module.exports = function putFile(fileName) {
  return (fileStream) => {
    const url = new URL(fileName, 'https://transfer.sh/');
    const options = {
      headers: {
        'user-agent': `${pkg.name}/${pkg.version} (${pkg.homepage})`,
      },
    };

    const spinner = progress(`Starting upload of ${fileName}`);

    return new Promise((resolve, reject) => {
      const onSuccess = (linkBuffer) => {
        const link = linkBuffer.toString();

        spinner.succeed(`File uploaded, here's the link: ${link} 👍`);
        resolve(link);
      };

      const onError = (err) => {
        if (err) {
          switch (err.code) {
            case 'ENOENT':
              spinner.fail(`Couldn't find the file ${fileName} 👎`);
              break;
            default:
              spinner.fail(err.message);
          }

          reject(err);
        }
      };

      const requestStream = got.stream.put(url.href, options);
      const concatStream = concat(onSuccess);

      pump(fileStream, requestStream, concatStream, onError);
    });
  };
};
