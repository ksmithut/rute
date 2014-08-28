'use strict';

var path = require('path');
var root = process.cwd();

function rute(dir) {
  if (rute.root) { delete rute.root; }
  return require(path.resolve(root, dir));
}

rute.root = function () {
  var args = [].slice.call(arguments);
  root = path.resolve.apply(null, args);
  delete rute.root;
};

module.exports = rute;
