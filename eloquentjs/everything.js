/*
------------------------------------

Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.

This one returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

------------------------------------
*/

// every using loop
function every(arr, predicate) {
  for (let ele of arr) {
    if (!predicate(ele)) return false;
  }
  return true;
}

// every using some
function everyWithSome(arr, predicate) {
  for (let ele of arr) {
    if (!some([ele], predicate)) return false;
  }
  return true;
}

// some
function some(arr, predicate) {
  for (let ele of arr) {
    if (predicate(ele)) return true;
  }
  return false;
}

let arr1 = [1, -5, 2, -13, 19];
let arr2 = [1, 5, 2, 13, 19];

console.log("arr1:", arr1);
console.log("arr2:", arr2);

console.log(
  "Everything in arr1 is > 0",
  every(arr1, (v) => v > 0)
);
console.log(
  "Everything in arr2 is > 0",
  every(arr2, (v) => v > 0)
);

console.log(
  "Everything (using some) in arr1 is > 0",
  everyWithSome(arr1, (v) => v > 0)
);
console.log(
  "Everything (using some) in arr2 is > 0",
  everyWithSome(arr2, (v) => v > 0)
);

console.log(
  "Some in arr1 is < 0",
  some(arr1, (v) => v < 0)
);
console.log(
  "Some in arr2 is < 0",
  some(arr2, (v) => v < 0)
);
