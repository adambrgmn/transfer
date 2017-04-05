const path = require('path');
const putFile = require('./lib/putFile');

module.exports = function transfr(fileName) {
  const filePath = path.resolve(fileName);
  putFile(filePath)
    .then(link => console.log(link))
    .catch(err => console.error(err));
};
