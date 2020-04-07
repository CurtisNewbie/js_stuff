/*
------------------------------------

For this exercise, write two functions, reverseArray
and reverseArrayInPlace . The first, reverseArray , takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace , does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

------------------------------------
*/

function reverseArray(arr) {
  let revarr = [];
  for (let i = arr.length - 1; i >= 0; i--) revarr.push(arr[i]);
  return revarr;
}

function reverseArrayInPlace(arr) {
  let l = 0;
  let h = arr.length - 1;
  while (l < h) {
    swap(arr, l, h);
    ++l;
    --h;
  }
}

function swap(arr, l, h) {
  let t = arr[l];
  arr[l] = arr[h];
  arr[h] = t;
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);
console.log(reverseArray(arr));
reverseArrayInPlace(arr);
console.log(arr);
