const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Dark?type=single";

const getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => (jokeContainer.textContent = `${data.joke}`));
};

btn.addEventListener("click", getJoke);

getJoke();
