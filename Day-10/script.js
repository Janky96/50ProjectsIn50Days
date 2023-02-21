const jokeButton = document.querySelector("#jokeBtn");
const jokeText = document.querySelector("#joke");

const getJoke = () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeText.innerHTML = data.joke;
    });
};

getJoke();

jokeButton.addEventListener("click", getJoke);
