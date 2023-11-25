const input = document.getElementById("input");
const search = document.getElementById("search");

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    loadImg();
  }
});

function loadImg() {
  search.innerHTML = "";
  const url = `https://pixabay.com/api/?key=40812063-079ddeb27a2465cc7cd374512&q=${input.value}&image_type=photo&pretty=true`;

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })
    .then((data) => {
      console.log(data.hits);

      for (let i = 0; i < data.hits.length; i++) {
        var image = document.createElement("img");

        image.src = `${data.hits[i].largeImageURL}`;

        search.appendChild(image);
      }
    });
  input.value = "";
}

loadImg();
