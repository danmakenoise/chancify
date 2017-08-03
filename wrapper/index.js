"use strict";function chancify(n,r){var t=r.outOf,c=r.runFor;return function(){var r=c/t;Math.random()<=r&&n()}}module.exports=chancify;
