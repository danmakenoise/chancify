# Chancify [![Build Status](https://travis-ci.org/danmakenoise/chancify.svg?branch=master)](https://travis-ci.org/danmakenoise/chancify)

A simple API for running javascript functions based upon percentage chance.


## Syntax
`chancify(func, opts)`


## Arguments
`func` : `a function you only want to run part of the time`

`opts` : `an opts object containing 'runFor' and 'outOf' properties (see below)`

## Opts

`runFor` and `outOf` are semantic terms. If I would like my function to only run 2 times for every 5 times it is called I can set `runFor` to 2, and `outOf` to 5.

## Example
```javascript
const chancify = require('chancify');

function foo() {
  // bar
}

chancify(foo, { runFor: 1, outOf: 10 }); // 1 in 10 chance it will actually run!
```
