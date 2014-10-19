/*global module, require*/
(function () {
  'use strict';

  module.exports = function module_exist(name) {
    try {
      require(name);
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        return false;
      }
    }

    return true;
  };
}());