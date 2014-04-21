## failing-line

Return the line and column number, filename and function name from the failing line from given error object.

## Install

```bash
$ npm install failing-line
```

## Usage

```js
var failingLine = require('failing-line')

process.on('uncaughtException', function (error) {
  failingLine(error)
  // => { line: 8, col: 0, function: 'Object.<anonymous>' filename: 'example.js' }
})

hereIfail++
```

If the top line(s) in the stack should be skipped in your case,
pass an extra parameter:

```js
failingLine(error, 1) // will start reading stack from second line
```

Check out `test.js` for more info.
