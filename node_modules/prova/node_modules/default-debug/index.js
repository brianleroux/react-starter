module.exports = enable;

function enable () {
  if (process.env.DEBUG) return;

  process.env.DEBUG = Array.prototype.join.call(arguments, ',');
}
