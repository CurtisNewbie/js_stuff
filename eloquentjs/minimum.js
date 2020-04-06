/*
------------------------------------

Write a function min that takes two arguments and returns their minimum.

------------------------------------
*/

function min(a, b) {
  if ((a == undefined) & (b == undefined)) return;

  return a < b ? a : b;
}

console.log("-10, 5", min(-10, 5));
console.log("5, 2", min(5, 2));
console.log("10, 1", min(10, 1));
