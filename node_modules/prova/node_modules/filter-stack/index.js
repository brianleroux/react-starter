module.exports = filterStack;

function filterStack (error, exclude) {
  var lines = error.stack.split('\n');
  var pattern = new RegExp('\/node_modules/' + exclude.join('|'));

  error.stack = lines.filter(function (el) {
      return !pattern.test(el);
  }).join('\n');

  return error;
}
