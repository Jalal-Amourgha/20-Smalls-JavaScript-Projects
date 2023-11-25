const screen = document.getElementById("screen");

function generateQuote() {
  const url = "https://api.quotable.io/random";

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      screen.innerHTML = data.content;
    });
}
