## run-serially

Run given commands as child processes serially.

See also: [run-paralelly](http://github.com/azer/run-paralelly)

## Install

```bash
$ npm install run-serially
```

## Usage

```js
run = require('run-serially')

run(['apt-get install foo', 'apt-get install bar', 'just fail'], function (error, stdouts, stderrs) {
  if (error) {
    // => { message: 'Command not found: "just fail"' }
  }

  stdouts[0]
  // => "Installed foo"

  stderrs[0]
  // ''

  stderrs[1]
  // => "bar not found in package registry"
})
```
