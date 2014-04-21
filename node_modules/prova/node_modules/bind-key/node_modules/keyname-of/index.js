var map = require("keynames");

module.exports = keynameOf;

function keynameOf (n) {
   return map[n] || String.fromCharCode(n).toLowerCase();
}
