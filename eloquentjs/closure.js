/*
------------------------------------

    Closure 

    Closure is a feature that being able to reference a specific 
    instance of a local binding in an enclosing scope.

    In js, function can be passed as value. We can create a local function
    and returns it to the external caller. So that we can dynamically use 
    different functions depending on certain conditions.

------------------------------------
*/
let emergent = false;

function getCall(isEmergent) {
  if (isEmergent == false)
    return () => {
      return "Chill ~ buddy";
    };
  else
    return () => {
      return "On no! Emergency! Repeat! Emergency!";
    };
}

const chillCall = getCall(emergent);

emergent = true;
const emergentCall = getCall(emergent);

console.log("chillCall(): ", chillCall());
console.log("emergentCall(): ", emergentCall());
