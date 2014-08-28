rute
====

[![NPM version](http://img.shields.io/npm/v/rute.svg?style=flat)](https://www.npmjs.org/package/rute)
[![Dependency Status](http://img.shields.io/gemnasium/ksmithut/rute.svg?style=flat)](https://gemnasium.com/ksmithut/rute)
[![Code Climate](http://img.shields.io/codeclimate/github/ksmithut/rute.svg?style=flat)](https://codeclimate.com/github/ksmithut/rute)
[![Build Status](http://img.shields.io/travis/ksmithut/rute.svg?style=flat)](https://travis-ci.org/ksmithut/rute)
[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/ksmithut/rute.svg?style=flat)](https://codeclimate.com/github/ksmithut/rute)

A node module that allows you to require stuff from your project root.

Usage
=====

This will get the module at `process.cwd()/middleware'`

```javascript
var middleware = require('rute')('middleware');
```

You can also change where the root that it starts from
Note that the arguments get passed into path.resolve.
Make sure that the path you put in is an absolute path.

```javascript
require('rute').root(__dirname, '../');
```
