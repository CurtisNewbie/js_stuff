/*
------------------------------------

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description.

------------------------------------
*/

function isEven(n) {
  if (n < 0 || n == 1) return false;
  else if (n == 0) return true;
  else return isEven(n - 2);
}

console.log("10 is even: ", isEven(10));
console.log("9 is even: ", isEven(9));
console.log("-10 is even: ", isEven(-10));
console.log("0 is even: ", isEven(0));
