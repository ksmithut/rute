'use strict';

var path = require('path');
var root = process.cwd();
var set  = false;

function rute(dir) {
  if (rute.root) { lockRoot(); }
  return require(path.resolve(root, dir));
}

rute.root = function () {
  var args = [].slice.call(arguments);
  root = path.resolve.apply(null, args);
  lockRoot();
};

function lockRoot() {
  rute.root = null;
}

module.exports = rute;
