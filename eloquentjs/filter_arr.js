/*
------------------------------------

Filtering Arrays

------------------------------------
*/

/**
 * A high-order function that filters an array based on a callback function
 * @param {*} array
 * @param {*} test a function that examines each element and return a boolean value
 */
function filter(array, test) {
  let filtered = [];
  for (let ele of array) {
    if (test(ele)) filtered.push(ele);
  }
  return filtered;
}

let arr = [1, 2, 3, 4, 5];
console.log("Before filtering:", arr);
// filter out 4
arr = filter(arr, (v) => {
  return v !== 4;
});
console.log("After filtering out 4:", arr);
