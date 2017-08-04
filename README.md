# Chancify the Wrapper [![Build Status](https://travis-ci.org/danmakenoise/chancify.svg?branch=master)](https://travis-ci.org/danmakenoise/chancify)

A simple API for wrapping javascript functions so they only run occasionally based upon percentage chance. Arguments will pass through!


## Syntax
`chancify(func, percentChance)`


## Arguments
`func` : A function you only want to run part of the time.

`percentChance` : A decimal value between 0 and 1 indicating the percentage chance you would like the function to run with.


## Return
Chancify returns a function. Call it with the same arguments as you would your original one and it will only run part of the time, based upon the chance you passed in.


## Examples

```javascript
const chancify = require('chancify');

function _foo(string) {
  console.log(string);
}

const foo = chancify(_foo, 1 / 10);

foo('hello world'); // 1 in 10 chance it will actually console log 'hello world'
```

```javascript
const chancify = require('chancify');

function bar(a, b) {
  return a + b;
}

module.exports = chancify(bar, 50 / 100); // exported function will only run 50% of the time
```
