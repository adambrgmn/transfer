const clipboard = require('copy-paste');
const progress = require('./progress');

module.exports = function copy(text) {
  const spinner = progress('Copying link to clipboard');

  return new Promise((resolve, reject) => {
    clipboard.copy(text, (err) => {
      if (err) {
        spinner.fail('Couldn\'t copy to clipboard (but the link is above anyway 👆)');
        reject(err);
      }

      spinner.succeed('Also, the link is copied to clipboard – so fire up them ⌘V fingers 🤞');
      resolve(text);
    });
  });
};
