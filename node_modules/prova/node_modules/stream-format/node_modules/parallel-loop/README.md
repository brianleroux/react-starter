## parallel-loop

Loop parallelly

## Install

```bash
$ npm install parallel-loop
```

## Usage

```js
loop = require('loop-paralelly')

loop(10, each, function () {
  console.log('end')
})

function each (done, i) {
  setTimeout(function () {
    console.log(i)
    done()
  }, Math.floor(Math.random() * 500))
})
```

Will output:

```
3
9
2
5
7
4
1
8
6
end
```
