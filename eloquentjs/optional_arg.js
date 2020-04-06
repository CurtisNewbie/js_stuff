/*
------------------------------------

    Optional Arguments

    If you pass too many, the extra ones are ignored. If you
    pass too few, the missing parameters get assigned the value undefined .

    In parameters of a method, when a parameter followed by = and a value, 
    it's assigned a default value when this argument is not given.

------------------------------------
*/
function say(a, b, c = "'you did not give me c arg'") {
  let str = "";
  if (a != undefined) str += a;
  if (b != undefined) str += b;
  if (c != undefined) str += c;
  console.log(str);
}

say("'Less arguments'", "'yup'");
say(
  "'More arguments'",
  "'yup'",
  "'I am the c arg'",
  "'you are god damn right'"
);
