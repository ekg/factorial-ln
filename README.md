# factorial-ln

[![NPM](https://nodei.co/npm/factorial-ln.png?global=true)](https://nodei.co/npm/factorial-ln/)

[![Build Status](https://travis-ci.org/ekg/factorial-ln.svg)](https://travis-ci.org/ekg/factorial-ln)

compute log(n!) of huge numbers (in node.js)

## example

``` js
var factorialln = require('factorial-ln')
factorialln(171) // would return Infinity with 'factorial' package
```

## install

```
npm install factorial-ln
```

## why?

By working with `log(n)` rather than `n`, we can deal with huge numbers without loss of precision, overflow, or underflow. No big number library is required, at least until we have reason to switch back into non-log. In many cases, such as where really big and really small numbers are only used internally in certain computations, we can completely avoid the use of a big number library.

Also, multiplication is much faster in log space (you add). The same for division (you divide). This is never a bad thing.

This module exports a single function which simply computes `log(n!)`.

## license

MIT
