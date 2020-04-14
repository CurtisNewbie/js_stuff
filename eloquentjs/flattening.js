/*
------------------------------------

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.

------------------------------------
*/

function flatten(arrOfArrs) {
  let flattened = [];
  for (let arr of arrOfArrs) {
    for (let ele of arr) {
      flattened.push(ele);
    }
  }
  return flattened;
}

let arrOfarr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(flatten(arrOfarr));
