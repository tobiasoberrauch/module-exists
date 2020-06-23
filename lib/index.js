/*global module, require*/
(function () {
  'use strict';

  module.exports = function module_exist(name) {
    try {
      require.resolve(name);
    } catch (err) {
      console.log('err ', err.code)
      if (err.code === 'MODULE_NOT_FOUND') {
        return false;
      }
    }

    return true;
  };
}());
