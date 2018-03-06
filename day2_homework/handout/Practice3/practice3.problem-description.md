## Practice 3 - Generating test data for Practice 1

Write a function `generate`:

```javascript
function generate(testLengthArray){
  // Your code here
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
```

In this practice, you will create the generator that was used to create `practice1-test-data.json`. `numberOfTestcases` is the number of tests data that must be generated.

The input `testLengthArray` will be an array of integer. For each number in the array, you must generate a corresponding test data object. Expected output:

```javascript
[
  /*
   * An array of testLengthArray.length test objects in the following format:
   */
  {
    "input": [
      /*
       * A sorted array of integer with length equal to 
       * the corresponding item in testLengthArray.
       * 
       * The array is sorted by ascending order,
       * and number is distributed uniformly.
       */
    ],
    "target" : // a number to search for within the array.
    "output" : // expected result of Practice 1's search function (index of target within input)
  },
  ... // more test objects of the same format
]
```

Furthermore, if `testLengthArray.length` is 4 or more. Your returned test cases must have all of the following special cases:

 - *Not found*: `input` doesn't contain `target`.
 - *First index*: `target` is at index `0`.
 - *Last index*: `target` is at index `input.length-1`.
 - *Middle index*: `target` is NOT at index `0` or `input.length-1`.

After you're done submit the folder to your git repository for evaluation.
