/*global module, require*/
(function () {
  'use strict';

  var module_exist = require('../lib');

  module.exports.nativeModules = function(t){
    t.expect(3);
    t.equal(module_exist('fs'), true, "fs module exist");
    t.equal(module_exist('module'), true, "module module exist");
    t.equal(module_exist('redis'), false, "redis module doesn't exist");
    t.done();
  };

  module.exports.notNativeModules = function(t){
    t.expect(2);
    t.equal(module_exist('nodeunit'), true, "nodeunit module exist");
    t.equal(module_exist('this_is_gonna_be_legen____wait_for_it____dary'), false, "redis module doesn't exist");
    t.done();
  };
}());