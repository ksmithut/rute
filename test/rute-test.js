'use strict';
/* global describe, before, after, beforeEach, afterEach, it */
/* jshint maxstatements: false */

var path   = require('path');
var expect = require('expect.js');

var testObject = {
  meow: 'mix',
  server: {
    ssl: false,
    host: 'localhost',
    port: '8000'
  }
};

describe('rute tests', function () {

  describe('Level 1', function () {

    // Default options
    it('should require modules from the root directory', function () {
      chdir('default');
      var rute = getRute();
      expect(rute).to.be.a('function');
      expect(rute.root).to.be.a('function');
      var config = rute('config');
      expect(config).to.be.eql(testObject);
      expect(rute).to.be.a('function');
      expect(rute.root).to.not.be.ok();
    });

    // Set new root level
    it('should be able to set a new root level', function () {
      chdir('new-root');
      var rute = getRute();
      expect(rute).to.be.a('function');
      expect(rute.root).to.be.a('function');
      rute.root(__dirname, 'fixtures/new-root/sub-folder');
      expect(rute.root).to.not.be.ok();
      var config = rute('config');
      expect(config).to.be.eql(testObject);
      expect(rute).to.be.a('function');
    });

  });

});

function chdir(dir) {
  process.chdir(path.join(__dirname, 'fixtures', dir));
}

function getRute() {
  delete require.cache[path.resolve(__dirname, '../index.js')];
  return require('../');
}
