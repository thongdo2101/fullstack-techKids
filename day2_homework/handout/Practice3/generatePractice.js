

'use strict'

function generate(testLengthArray){
  var list = new Array;
  testLengthArray.forEach(element => {
    var input = new Array;
    for (let i = 0; i < element; i++) {
      input.push(getRandomInt(-10000,10000));
    }
    input.sort((a, b) => {
      return a - b;
    });
    var target = getTarget(input);
    var output = input.indexOf(target);

    list.push({"input" : input, "target" : target, "output" : output});
  });
  return list;
}
function getTarget(input) {
  var choice = getRandomInt(0,3);
  if (choice == 0) {
    let target = getRandomInt(-10000,10000);
    while (input.indexOf(target) == -1) {
      return target;
    }
  }
  if (choice == 1) {
    return input[0];
  }
  if (choice == 2) {
    return input[input.length -1];
  }
  if (choice == 3) {
    var index = getRandomInt(1, input.length -2);
    return input[index];
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
module.exports = generate
