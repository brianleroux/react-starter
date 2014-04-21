## failing-code

Returns failing code for given error. It's based on [failing-line](http://github.com/azer/failing-line).

## Install

```bash
$ npm install failing-code
```

## Usage

a.js:

```js
require('./b')

var foo
hereIfail++;
var bar
```

b.js:
```js
var failingCode = require('failing-code')

process.on('uncaughtException', function (error) {

  failingCode(error)
  // => [
  //      { line: 3, code: "var foo" },
  //      {
  //        line: 4,
  //        col: 0,
  //        code: "here I fail++",
  //        fn: "Object.<anonymous>",
  //        filename: "a.js"
  //      },
  //      { line: 5, code: "var bar" }
  //   ]

})
```

It reads the source code syncronously by default. If you'd like to avoid sync reading, you can read the file and pass it to failing-code as second parameter:

```js
failingLine = require('failing-line')
ln = failingLine(error)

fs.readFile(ln.filename, function (error, buffer) {

  failingCode(error, buffer.toString())
  // => [...]

})
```

If you'd like to skip some lines from the top of the stack trace, pass the number of the lines to skip as third parameter:

```js
failingCode(error, null, 1) // will get skip the first line of the stack
```

See `test.js` and [failing-line](http://github.com/azer/failing-line) for more info.
