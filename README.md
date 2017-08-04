# Chancify the Wrapper [![Build Status](https://travis-ci.org/danmakenoise/chancify.svg?branch=master)](https://travis-ci.org/danmakenoise/chancify)

A simple API for wrapping javascript functions so they only run occasionally based upon percentage chance.


## Syntax
`chancify(func, percentChance)`


## Arguments
`func` : `a function you only want to run part of the time`

`percentChance` : `a decimal value between 0 and 1 indicating the percentage chance you would like the function to run with`


## Examples

```javascript
const chancify = require('chancify');

function _foo() {
  // bar
}

const foo = chancify(_foo, 1 / 10);

foo(); // 1 in 10 chance it will actually run!
```

```javascript
const chancify = require('chancify');

function bar() {
  // baz
}

module.exports = chancify(bar, 50 / 100); // exported function will only run 50% of the time
```
