// string is not object tho it has built-in properties and methods
let str = "I_am_a_string";
console.log("'str':", str);
console.log("str.length:", str.length);
console.log("First char in str:", str[0]);

str.habit = "habit of string";
console.log("str.habit:", str.habit);

console.log("Slice str [0-4]:", str.slice(0, 4));

console.log("First index of 'a':", str.indexOf("a"));
console.log("Last index of 'a':", str.lastIndexOf("a"));

console.log("First index of 'st':", str.indexOf("st"));
console.log("Last index of 'tr':", str.lastIndexOf("tr"));

// trim all whitespaces, \n \t from the left and right
let str_with_spaces = "     yo \n \t ";
console.log("Trim 'str_with_spaces':", str_with_spaces.trim());
console.log(
  `'str_with_spaces' not changed without assigning values returned by trim(): '${str_with_spaces}'`
);

// pad anything on the left based on the specified length, (8, "0") does not mean pad eight 0 on the left
console.log("Zero padding '101' if len < 8:", "101".padStart(8, "0"));

let arr;
console.log("'str':", str);
console.log("split 'str' to an array:", (arr = str.split("_")));
console.log("join an arr back a string using '/':", arr.join("/"));

console.log("Repeat 'str' for three times:", str.repeat(3));
