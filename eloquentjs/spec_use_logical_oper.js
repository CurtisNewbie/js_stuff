/*
------------------------------------

    Logical Operators can sometimes be used differently in js.

    When using || between multiple values, it will return the first value 
    that is considered to be "true". Where the 0, null, "" are all considered 
    as false.

    With this, it can be used to provide default values, the those before it are false.

    The && works the other way around. When the first value is false, it returns the first 
    value.

------------------------------------
*/
let num = 0; /** false */
let str = ""; /** false */
let nulVal = null; /** false */

console.log(
  "Give me the first valid value:",
  num || str || nulVal || "'No valid value'"
);

console.log("Give me the first invalid value:", nulVal && "valid");

console.log("Give me the first invalid value:", "valid" && nulVal);
