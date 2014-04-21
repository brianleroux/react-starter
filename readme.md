# Starter

Quickly prototype components and compose apps with:

- React
- Browserify
- npm-css
- PhoneGap

To get started run `npm init && npm run serve`. 

The source layout looks like this:

    ./-node_modules
     |-src 
     | |-js ........... index.js entry browserified bundle to www/index.js
     | |-css .......... index.css entry npm-css imports to www/index.css
     | '-index.html
     |-test ........... unit tests
     |-www ............ build directory
     |-package.json ... automatia in scripts, deps
     '-readme.md

## Publishing

You can quickly iterate on things in `src/`. Ideally, you use this template to build a single React control. You denote the entry to the control in `package.json` under the "main" key to enable `require`, and "style" key to enable `@imports`. From there you could `npm publish` or `npm link` to compose into an app or composite component. Only `js` and `css` are supported so images, and fonts, need to be inlined appropriately. 

## tasks

`npm run`

- `test`: runs `test/` and pipes to stdout
- `btest`: runs `test/` and serves on port 7559
- `js`: browserify `src/js/index.js` to `www/js/index.js`
- `css`: npm-css `src/css/index.css` to `www/css/index.css`
- `html`: copy `src/index.html` to `www/index.html`
- `build`: runs `js`, `css`, and `html`
- `watch`: runs build if anything in `src/` changes
- `serve`: launches a phonegap instrumented livereloading static server
- `gh-pages`: publish `www/` to `gh-pages` branch

## todo

- viewport
- fonts
- coverage, benchmarking
- vendor
- min/inliner
