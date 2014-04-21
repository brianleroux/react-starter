var nextTick = require("just-next-tick");

module.exports = parallel;

function parallel (from, to, chain) {
  var missing = 0;
  var counter = 0;

  nextTick(function () {
    next(0);
  });

  function next (i) {
    if (i >= to) return;

    missing += 100 + i;

    chain.step()(function (error) {
      missing -= 100 + i;
      counter++;

      if (error) {
        chain.error() && chain.error()(error, i);
      }

      if (missing == 0 && to - from == counter) {
        chain.complete() && chain.complete()();
      }

    }, i);

    next(i+1);
  };
}
