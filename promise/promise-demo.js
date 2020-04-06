const img = document.querySelector("img");
let imgUrl =
  "https://vignette.wikia.nocookie.net/pennyspoetry/images/8/89/Thomseasons00rich_0007.jpg/revision/latest/scale-to-width-down/340?cb=20161030174846";
let promise = fetch(imgUrl);
promise
  .then(resp => {
    console.log(resp.status);
    return resp.blob();
  })
  .then(blob => {
    img.src = URL.createObjectURL(blob);
  })
  .catch(e => {
    window.alert(e);
  });
