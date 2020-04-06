let jsonStr;
let json;
/*
------------------------------------------------

  TEXT

------------------------------------------------
*/
let req = new XMLHttpRequest();
req.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
req.responseType = "text";
req.send();
req.onload = () => {
  jsonStr = req.response;
  console.log("String Response:", jsonStr);
  console.log("Parse:", JSON.parse(jsonStr));
};

/*
------------------------------------------------

  JSON

------------------------------------------------
*/
let req2 = new XMLHttpRequest();
req2.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
req2.responseType = "json";
req2.send();
req2.onload = () => {
  json = req2.response;
  console.log("JSON Response:", json);
  console.log("Stringfy:", JSON.stringify(json));
};
req2.onabort = () => {
  console.log("Aborted...");
};
req2.addEventListener("error", () => {
  console.log("Error, something bad happened");
});
