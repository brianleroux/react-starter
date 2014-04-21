var through = require("through");
var concat = require("concat-stream");
var pause = require("pause-function");
var render = require("new-format");
var loop = require("parallel-loop");

module.exports = format;

function format (vars) {
  var transform = pause(write);
  var end = pause(done);
  var stream = through(transform, end);

  var content;
  var keys;
  var ready;
  var queued;

  if (arguments.length == 1 && typeof vars == 'object') {
    keys = Object.keys(vars);
    content = {};
  } else {
    vars = Array.prototype.slice.call(arguments);
    content = [];
  }

  loop((keys || vars).length, each, function () {
    transform.resume();
    end.resume();
  });

  return stream;

  function done () {
    this.queue(null);
  }

  function write (chunk) {
    this.queue(render(chunk.toString(), content));
  }

  function each (end, index) {
    var key;
    var value;

    if (keys) {
      key = keys[index];
      value = vars[key];
    } else {
      key = index;
      value = vars[index];
    }

    if (!value || !value.pipe) {
      content[key] = value;
      return end();
    }

    value.on('error', function (err) {
      stream.emit('error', err);
    });

    value.pipe(concat(function (data) {
      content[key] = data.toString();
      end();
    }));
  }

}
