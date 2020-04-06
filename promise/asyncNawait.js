/*
------------------------------------

We can use async and await keyword on function, which then always return a Promise or await for a Promise returned

------------------------------------
*/
function heavyJob() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // heavy job
      resolve("Heavy job done, which takes 3 seconds");
    }, 3000);
  });
}

// await can only be used within async function
async function getHeavyJobResult() {
  let result = await heavyJob();
  console.log("Await Promise Result: " + result);
}
// using async and await
getHeavyJobResult();

/*
  We can also shorten code to as follows using array syntax
*/
let job = async () => {
  console.log("Doing slow job");
};
job()
  .then(heavyJob)
  .then(console.log);
