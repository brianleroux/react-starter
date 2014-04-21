var failingLine = require('./');

process.on('uncaughtException', function (error) {
  console.log(failingLine(error));
});

if (true) {
  hereIfail++;
}
