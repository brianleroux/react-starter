module.exports = detect;

function detect (error, shift) {
  if (!error || !error.stack) return;

  if (/  at /.test(error.stack)) return v8(error, shift);

  if (/:\d+:\d+$/.test(error.stack)) return safari(error, shift);

  return firefox(error, shift);
}

function safari (error, shift) {
  var index = 0;
  if (shift) index += shift;

  var fn, filename, line, col;
  var lines = error.stack.split('\n');
  var stack = lines[index] || lines[0];

  var fields = stack.split(/\:(\d+)\:(\d+)$/);
  var numbers = fields.slice(1, 3);
  fields = fields[0].split('@');

  return {
    fn: fields[0],
    filename: fields[1],
    line: Number(numbers[0]),
    col: Number(numbers[1])
  };
}

function v8 (error, shift) {
  if (!error || !error.stack) return;

  var index = 1;
  if (shift) index += shift;

  var fn, filename, line, col;
  var lines = error.stack.split('\n');
  var stack = lines[index] || lines[1];

  if (!stack) return;

  var match = stack.match(/at ([\(\)\w\.<>\[\]\s]+) \((.+):(\d+):(\d+)/);

  if (!match) {
    match = stack.match(/at (.+):(\d+):(\d+)/);
    if (!match) return undefined;

    filename = match[1];
    line = Number(match[2]);
    col = Number(match[3]);
  } else {
    fn = match[1];
    filename = match[2];
    line = Number(match[3]);
    col = Number(match[4]);
  }

  return {
    fn: fn,
    filename: filename,
    line: line,
    col: col
  };
}

function firefox (error, shift) {
  var index = 0;
  if (shift) index += shift;

  var fn, filename, line, col;
  var lines = error.stack.split('\n');
  var stack = lines[index] || lines[0];

  var fields = stack.split(/\:(\d+)$/);
  var numbers = fields.slice(1, 2);
  fields = fields[0].split('@');

  if (index == 0) {
    col = error.columnNumber;
  }

  return {
    fn: fields[0],
    filename: fields[1],
    line: Number(numbers[0]),
    col: col
  };
}
