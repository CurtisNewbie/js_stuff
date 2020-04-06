/*
------------------------------------

    type coercion

    In case where the values given are illegal, it does the auto type conversion for you.
    However, if the values cannot be or are incorrectly converted to a type, the operation
    may output unexpected results.

------------------------------------
*/
console.log("8 * null = ", 8 * null);
console.log("'5' - 1 = ", "5" - 1);
console.log("'5' + 1 = ", "5" + 1);
console.log("'five' * 2 = ", "five" * 2);
console.log("false == 0 = ", false == 0);

/*
------------------------------------

    null and undefined can be considered interchangable

    With this in mind, wheneven we want to make sure something is neither null nor undefined, we 
    simply compares the value with null.

------------------------------------
*/
console.log("null == undefined =", null == undefined);
