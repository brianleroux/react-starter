var filterStack = require("./");

var stack = ["Error: should be equal",
             "    at Test.assert (/dev/project/node_modules/foo/lib/lorem.js:178:54)",
             "    at Test.equal (/dev/project/node_modules/bar/lib/ipsum.js:301:10)",
             "    at Expect (/dev/project/lib/dolor.js:39:29)",
             "    at null._onTimeout (/dev/project/example.js:10:32)",
             "    at Timer.listOnTimeout (timers.js:110:15)"];

var err = new Error('lorem ipsum');
err.stack = stack.join('\n');

var exclude = ['foo', 'bar'];

console.log(filterStack(err, exclude).stack);
