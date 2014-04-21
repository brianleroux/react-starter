## stream-format

String formatting with streams. It's based on [new-format](http://github.com/azer/new-format)

## Install

```bash
$ npm install stream-format
```

## Usage

Unlike new-format, it takes strings as streams. For example:

```js
format = require('stream-format')
fs = require('fs')

fs.readFileSync('./foo.txt')
// => 'Hello, {0} {1}'

render = format('span', 'eggs').pipe(process.stdout)

fs.createReadSteam('./foo').pipe(render)
// => 'Hello span eggs'
```

You can pass an object of variables instead, and use names in your template:

```js
fs.readFileSync('./bar.txt')
// => 'Hello {name} {surname}'

render = format({ name: 'Azer', surname: 'Koculu' }).pipe(process.stdout)

fs.createReadStream('./bar.txt').pipe(render)
// => 'Hello Azer Koculu'
```

Variables can be streams, too:

```js
fs.readFileSync('./qux.txt')
// => "Hello {name}, choose your favorite fruit: {fruits}"

render = format({ fruits: fs.createReadStream('fruits.txt'), name: 'azer' }).pipe(process.stdout)

fs.createReadStream('./qux.txt').pipe(render)
// => Hello azer, choose your favorite fruit: apple, orange, cherry, plums
```

See `test.js` for more info.
