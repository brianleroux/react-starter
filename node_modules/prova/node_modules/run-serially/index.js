var iter = require("iter");
var exec = require("child_process").exec;

module.exports = run;

function run (commands, callback) {
  var stdouts = [];
  var stderrs = [];

  iter(commands.length)
    .error(error)
    .done(done)
    .run(each);

  function each (done, i) {
    var cmd = commands[i];
    exec(cmd, function (error, stdout, stderr) {
      if (error) return done(error);

      stdouts[i] = stdout;
      stderrs[i] = stderr;

      done();
    });
  }

  function error (error) {
    callback(error, stdouts, stderrs);
  }

  function done () {
    callback(undefined, stdouts, stderrs);
  }

}
