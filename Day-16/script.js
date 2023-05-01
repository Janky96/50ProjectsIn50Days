const smallCups = document.querySelectorAll(".cup-small");

smallCups.forEach((smallCup) => {
  smallCup.addEventListener("click", () => {
    smallCup.classList.toggle("full");
  });
});
