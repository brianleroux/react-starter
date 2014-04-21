var minimist = require("minimist");
var argv = minimist(process.argv.slice(process.argv[0] == 'node' ? 2 : 1));

module.exports = command;
module.exports.version = version;
module.exports.help = help;

function command () {
  var result = argv;
  var key;
  var options;
  var subcommands;

  if (typeof arguments[arguments.length - 1] == 'object') {
    options = arguments[arguments.length - 1];
  }

  if (arguments.length > 1 || typeof arguments[0] == 'string') {
    subcommands = Array.prototype.slice.call(arguments, 0, arguments.length - (options ? 1 : 0));
  }

  if (options) {
    for (key in argv) {
      if (key == '_') continue;
      if (!options[key]) continue;

      result[options[key]] = argv[key];
    }
  }

  if (subcommands && subcommands.indexOf(argv._[0]) > -1) {
    result[argv._[0]] = true;
    argv._ = argv._.slice(1);
    return result;
  }

  options || (options = {});

  if ((argv.version && !options.version) || (argv.v && !options.v)) {
    version();
  }

  if ((argv.help && !options.help) || (argv.h && !options.h)) {
    require('show-help')('../../');
  }

  return result;
}

function version () {
  require('show-version')('../../');
}

function help () {
  require('show-help')('../../');
}
