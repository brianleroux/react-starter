module.exports = pause;

function pause (fn, ret) {
  var paused = true;
  var calls;

  wrapper.resume = resume;
  wrapper.pause = pause;

  return wrapper;

  function drain () {
    if (!calls) return;

    var copy = calls;
    calls = undefined;

    var i = -1;
    var len = copy.length;
    var call;

    while (++i < len) {
      call = copy[i];
      fn.apply(call.ctx, call.args);
    }
  }

  function resume () {
    paused = undefined;
    drain();
  }

  function wrapper () {
    if (paused) {
      calls || (calls = []);
      calls.push({ ctx: this, args: arguments });
      return ret;
    }

    return fn.apply(this, arguments);
  };

  function pause () {
    if (paused) return;
    paused = true;
    calls = undefined;
  }
}
