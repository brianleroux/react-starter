## dom-children

Library to modify DOM 

Example:

```js
add(document.body, '<h1>{title}</h1>{content}', {
  title: 'Hello',
  content: 'Welcome!'
})
```

## Install

```bash
$ npm install dom-children
```

## API

### add(element, child)

Adds `child` to `el`

```js
add(document.body, document.createElement('textarea'))
add('body .content', document.createElement('textarea'))
add('.content', '<div>hello</div>')
add('.content', '<h1>{title}</h1>', { title: 'Hello!' })
```

### addAfter(element, child, reference)

Similar to `addBefore`

### addBefore(element, child, reference)

```js
addBefore(document.body, document.createElement('textarea'), document.body.firstChild)
addBefore('body', '<h1>{msg}</h1>', { msg: 'foobar' }, document.body.firstChild)
```

### insert(element, parent)

insert `element` to `parent` as child

```js
insert(document.createElement('textarea'), document.body)
insert('<input />', '.content')
insert('<h1>{title}</h1>', { title: 'hello' }, '.content')
```

### replace(element, target, replacement)

replace `target` with `replacement`

```js
replace(document.body, document.body.firstChild, document.createElement('textarea'))
replace('body .content', '.content ul', '<h1>hello</h1>')
replace('body .content', '.content ul', '<h1>{msg}</h1>', { msg: 'hello!' })
```

### remove(element)

remove `element`

```js
remove(document.body.firstChild)
remove('body .content')
```

### remove(parent, child)

remove `child`

```js
remove(document.body.firstChild, 'h1')
```
