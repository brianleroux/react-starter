module.exports = uniques;

function uniques(arr){
  var dict = {}, result = [];

  var i = -1, len = arr.length;
  while (++i < len) {
    if (dict[arr[i]]) continue;

    dict[arr[i]] = true;
    result.push(arr[i]);
  }

  return result;
}
