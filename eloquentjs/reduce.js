/*
------------------------------------

Reduce: a standard function that does a combining function for all elements starting 
from the first element

    I.e.,
    let curr = first
    
    for each
        curr = combine(curr, each)
    
    return curr

------------------------------------
*/

/**
 * Reduce function that recursively does the combination for each elements, starting from first element
 * @param {*} arr
 * @param {*} combine callback function that takes two elements, does some combination operation and returns a value
 */
function reduce(arr, combine) {
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr = combine(curr, arr[i]);
  }
  return curr;
}

let arr = [1, 2, 3, 4, 5];
console.log("Before reduce:", arr);

// calculate the sum
let res = reduce(arr, (a, b) => {
  return a + b;
});
console.log("Result of reduce (find sum):", res);

// find the max value
let max = reduce(arr, (a, b) => {
  return a > b ? a : b;
});
console.log("Result of reduce (find max):", max);
