const _ = require('lodash');

module.exports.hello = () => {
  console.log('world');
  return _.toLower('hai there');
}


