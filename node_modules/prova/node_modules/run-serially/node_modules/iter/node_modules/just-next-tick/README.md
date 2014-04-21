## just-next-tick

Cross-platform next-tick with fallback to setTimeout.

## Install

```bash
$ npm install just-next-tick
```

## Usage

```js
nextTick = require('just-next-tick')

nextTick(function () {
  console.log('world')
})

console.log('hello')

// hello
// world
```
