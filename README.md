rute
====

[![io.js compatibility](https://img.shields.io/badge/io.js-compatible-brightgreen.svg?style=flat)](https://iojs.org/)
[![NPM version](http://img.shields.io/npm/v/rute.svg?style=flat)](https://www.npmjs.org/package/rute)

[![Dependency Status](http://img.shields.io/david/ksmithut/rute.svg?style=flat)](https://gemnasium.com/ksmithut/rute)
[![Dev Dependency Status](http://img.shields.io/david/dev/ksmithut/rute.svg?style=flat)](https://gemnasium.com/ksmithut/rute)
[![Code Climate](http://img.shields.io/codeclimate/github/ksmithut/rute.svg?style=flat)](https://codeclimate.com/github/ksmithut/rute)
[![Build Status](http://img.shields.io/travis/ksmithut/rute.svg?style=flat)](https://travis-ci.org/ksmithut/rute)
[![Coverage Status](http://img.shields.io/codeclimate/coverage/github/ksmithut/rute.svg?style=flat)](https://codeclimate.com/github/ksmithut/rute)

A node module that allows you to require stuff from your project root.

Usage
=====

This will get the module at `process.cwd()/middleware.js` or
`process.cwd()/middleware/index.js`

```javascript
var middleware = require('rute')('middleware');
```

You can also change where the root that it starts from
Note that the arguments get passed into path.resolve.
Make sure that the path you put in is an absolute path.

```javascript
require('rute').root(__dirname, '../');
```

Note that you can only call `.root()` successfully once, and you must do it
before you use it to require anything using `rute`. This prevents any
unexpected behavior when trying to change the root that `rute` used. I may be
convinced in the future to make a more dynamic system.

Issues
======

I accept pull requests (as long as it doesn't detract from the original purpose
of the module)

It shouldn't be do hard to understand the code. It less lines of code than this
README.
