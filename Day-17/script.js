const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fc4147aadf4608546340b171aa3a2154&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=fc4147aadf4608546340b171aa3a2154&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

const showMovies = (movies) => {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;
    let colorVote = "";

    if (vote_average >= 7) {
      colorVote = "green";
    } else if (vote_average < 7 && vote_average > 5) {
      colorVote = "orange";
    } else {
      colorVote = "red";
    }

    main.innerHTML += `<div class="movie">
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title} image"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${colorVote}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
