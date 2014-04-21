## pause-function

Pause and resume function calls

## Install

```bash
$ npm install pause-function
```

## Usage

```js
pause = require('pause-function')
echo = pause(print)

echo('hello')
echo('world')

echo.resume()
// hello
// world

echo('span eggs')
// span eggs

function print (msg) {
  console.log(' => ', msg)
}
```
