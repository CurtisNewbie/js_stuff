/*
------------------------------------

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.

------------------------------------
*/

function countChar(str, c) {
  if (typeof str === "string" && typeof c === "string") {
    let n = 0;
    let len = str.length;
    for (let i = 0; i < len; i++) {
      if (str[i] == c) ++n;
    }
    return n;
  } else {
    return -1;
  }
}

function countBs(str) {
  return countChar(str, "B");
}

let text = "BbbbbdfjBksBljdf";
console.log(`Number of Bs in '${text}'`, countBs(text));
