## filter-stack

Filter specified modules from the stack trace of an error object

## Install

```bash
$ npm install filter-stack
```

## Usage

```js
var filterStack = require('filterStack')

var err = new Error()

err.stack
// => Error: should be equal
//        at Test.assert (/dev/project/node_modules/foo/lib/lorem.js:178:54)
//        at Test.equal (/dev/project/node_modules/bar/lib/ipsum.js:301:10)
//        at Expect (/dev/project/lib/dolor.js:39:29)
//        at null._onTimeout (/dev/project/example.js:10:32)
//        at Timer.listOnTimeout (timers.js:110:15)

var exclude = [
  'foo',
  'bar'
]

filterStack(err, exclude).stack
// => Error: should be equal
//        at Expect (/dev/project/lib/dolor.js:39:29)
//        at null._onTimeout (/dev/project/example.js:10:32)
//        at Timer.listOnTimeout (timers.js:110:15)
```
