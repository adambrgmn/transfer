const ora = require('ora');
const { arc } = require('cli-spinners');

module.exports = (text) => {
  const spinner = ora({
    text,
    spinner: arc,
  });

  return spinner.start();
};
