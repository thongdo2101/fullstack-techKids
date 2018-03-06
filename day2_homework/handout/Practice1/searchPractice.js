'use strict'

function search(input, target) {
  var res = input.findIndex(k => k === target);
  return res;
}

module.exports = search