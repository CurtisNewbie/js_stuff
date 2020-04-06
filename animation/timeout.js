/*
----------------------------------------

async timeouts 

----------------------------------------
*/
console.log("say something after 1 second");
setTimeout(say, 1000, "something");
function say(val) {
  console.log("say", val);
}

// close timeout
let timer = setTimeout(say, 1000 * 10, "don't stop me");
clearTimeout(timer);

/*
----------------------------------------

async intervals

----------------------------------------
*/
let interv = setInterval(displayTime, 1000);
function displayTime() {
  let date = new Date();
  let locDateStr = date.toLocaleDateString();
  console.log("Report Every One Sec", locDateStr);
}
setTimeout(() => {
  // close the interval after 5 sec
  clearInterval(interv);
  console.log("Interval closed");
}, 5500);
