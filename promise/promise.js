function sayOne() {
  console.log("sayOne");
  console.log("sayOne");
}

function heavyLifting() {
  // this is a fulfilled Promise, meaning that it has been completed, since it returns anything other than Promise
  return new Promise(() => {
    setTimeout(() => {
      // do nothing for 3 seconds
    }, 3000);
    console.log("heavylifting done");
    // unfulfilled Promise
    // return new Promise(printAsync);
    // we can then chain an other promise after the printAsync() method
  });
}

function printAsync() {
  console.log("Printing something");
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  console.log("Printing something");
}

// construct a promise by returning it in method
heavyLifting().then(new Promise(sayOne));
// use new Promise() to construct a Promise
let prom2 = new Promise(printAsync);

// as () => {return doThing() } is same as () => { doThing() }
// we can further simplify code
/*
chooseToppings().then(function(toppings) {
  return placeOrder(toppings);
});

chooseToppings().then(toppings => placeOrder(toppings));
*/
