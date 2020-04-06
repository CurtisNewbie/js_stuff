const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
/*
----------------------------------------

oldstyle async callbacks

----------------------------------------
*/
btn.addEventListener("click", () => {
  alert("You clicked me");
  let pEle = document.createElement("p");
  pEle.textContent = "New paragraph";
  document.body.appendChild(pEle);
});

/*
----------------------------------------

newstyle async promise

----------------------------------------
*/
btn2.addEventListener("click", displayText);
textUrl =
  "https://raw.githubusercontent.com/mdn/learning-area/master/javascript/apis/fetching-data/verse1.txt";
function displayText() {
  fetch(textUrl)
    .then(resp => {
      return resp.text();
    })
    .then(text => {
      let p = document.createElement("p");
      p.textContent = text;
      document.body.appendChild(p);
    })
    .catch(reason => {
      console.log(reason);
    });
}
