/**
 * A function that does transformation for all elements in an array
 * @param {*} arr
 * @param {*} transform a callback function
 */
function map(arr, transform) {
  let mapped = [];
  for (let ele of arr) {
    mapped.push(transform(ele));
  }
  return mapped;
}

let arr = [1, 2, 3, 4, 5];
console.log("Before Transformation:", arr);
// transform values, times 2
arr = map(arr, (e) => {
  return e * 2;
});
console.log("After Transformation (value * 2):", arr);
