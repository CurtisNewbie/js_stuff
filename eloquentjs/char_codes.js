/*
------------------------------------

In most cases, the UTF-8 is used, wherein each char is encoded in a 16-bit int number
However, in JS, to cope with more characters, the UTF-16 is used instead, where the 
16-bit int number is not enough for each char. Two unit is used for each character in
UTF-16. 

------------------------------------
*/

let somestuff = "🐴👟";
console.log("UTF-16 String:", somestuff);
console.log("How many char codes it uses:", somestuff.length);

console.log("Get the first unit:", String.fromCharCode(somestuff[0]));
console.log(
  "Get the first unit: (half-char/one unit)",
  String.fromCharCode(somestuff.charCodeAt(0))
);
console.log(
  "Get the actual code of first char (two units)",
  String.fromCharCode(somestuff.codePointAt(0))
);

console.log(
  "Get the char (combining the first two char codes (units)",
  String.fromCharCode(somestuff.charCodeAt(0), somestuff.charCodeAt(1))
);

/*
------------------------------------

We can loop over a string, which returns the actural char rather than the unit/charcode

------------------------------------
*/
for (let c of somestuff) {
  console.log(c);
}
