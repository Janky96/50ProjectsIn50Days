const searchButton = document.querySelector(".btn");
const search = document.querySelector(".search");

searchButton.addEventListener("click", () => {
  search.classList.toggle("active");
});
