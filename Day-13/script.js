const inputText = document.querySelector("#inputText");
const choicesContainer = document.querySelector(".choices");

inputText.addEventListener("keydown", (event) => {
  const choices = inputText.value
    .split(",")
    .filter((choice) => choice.trim() !== "")
    .map((choice) => choice.trim());
  choicesContainer.innerHTML = "";

  choices.forEach((element) => {
    const choice = document.createElement("div");
    choice.className = "choice";
    choice.innerText = element;
    choicesContainer.appendChild(choice);
  });

  if (event.code === "Enter") {
    randomSelect();
  }
});

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".choice");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("active");
}

function unHighlightTag(tag) {
  tag.classList.remove("active");
}
