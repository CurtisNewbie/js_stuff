/*
------------------------------------

    REST parameters is just Varargs

------------------------------------
*/
function max(...args) {
  let len = args.length;
  console.log("Number of arguments:", len);
  let max;
  for (let n of args) {
    if (max == undefined) {
      max = n;
    } else {
      if (max < n) max = n;
    }
  }
  return max;
}

console.log(max(1, 3, 5, 6, 7, 8, 2, 3, 4, 2));

/*
------------------------------------

  Use it for array concatenation

------------------------------------
*/
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log([0, ...arr, 6, 7, 8]);
