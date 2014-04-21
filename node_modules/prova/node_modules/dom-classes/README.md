## dom-classes

Cross-browser element class manipulation, utilizing the native .classList when possible. This is not designed to be a .classList polyfill.

## Install

```bash
$ npm install dom-classes
```

## Usage

```js
classes = require('dom-classes')

classes(el)
// => ['foo', 'bar']
```

## API

### classes(el)

Return an array of classes

```
classes(el)
// => ['foo', 'bar']
```

### .add(el, class)

  Add `class`

### .remove(el, class)

  Remove `class` name or all classes matching the given regular expression.

### .toggle(el, class)

  Toggle `class`.

### .has(el, class)

  Check if `class` is present.

### .contains(el, class)

  Check if `class` is present.
