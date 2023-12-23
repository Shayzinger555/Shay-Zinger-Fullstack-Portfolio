import {
  countries,
  reset,
  search,
  filterAZfunction,
  filterPopfunction,
  filterContfunction,
  filterLikedfunction,
} from "./countries.service.js";
import { getData, likedCountries, updateData } from "./localStorage.service.js";

const cards = document.getElementById("cards");

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", (event) => {
  reset();
  cards.innerHTML = "";

  if (!event.target.value || event.target.value == "") {
    return createCardsList();
  }

  search(event.target.value);
  createCardsList();
});
// Filters
let filterPopUp = document.querySelector("#filterPopUp");
let filterAZOption = document.querySelector("#filterAZOption");
let filterPopOption = document.querySelector("#filterPopOption");
let filterContOption = document.querySelector("#filterContOption");
let filterLikedOption = document.querySelector("#filterLikedOption");
filterAZOption.addEventListener("click", () => {
  reset();
  cards.innerHTML = "";
  filterAZfunction();
  createCardsList();
  filterPopUp.classList.add("invisible");
});

filterPopOption.addEventListener("click", () => {
  reset();
  cards.innerHTML = "";
  filterPopfunction();
  createCardsList();
  filterPopUp.classList.add("invisible");
});
filterContOption.addEventListener("click", () => {
  reset();
  cards.innerHTML = "";
  filterContfunction();
  createCardsList();
  filterPopUp.classList.add("invisible");
});
filterLikedOption.addEventListener("click", () => {
  reset();
  cards.innerHTML = "";
  filterPopUp.classList.add("invisible");
  filterLikedfunction();
  console.log(countries);
  createCardsList();
});

// createCards
const createCard = (country) => {
  const card = document.createElement("div");
  card.className = "card m-2 col-md-3 col-sm-12 shadow";

  const cardImg = document.createElement("img");
  cardImg.className = "card-img-top img border rounded shadow mt-3";
  cardImg.src = country.flags.png;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = country.name.common;

  const population = document.createElement("p");
  population.className = "card-text";
  population.textContent = `population: ${country.population}`;

  const continent = document.createElement("p");
  continent.className = "card-text";
  continent.textContent = `Continent: ${country.continents}`;

  const capital = document.createElement("p");
  capital.className = "card-text";
  capital.textContent = `capital: ${country.capital}`;

  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer d-flex justify-content-center";

  const heart = document.createElement("i");
  heart.addEventListener("click", () => {
    updateData(country.name.common);
    if (heart.classList[heart.classList.length - 1] == "text-dark") {
      heart.className = "fa fa-heart text-danger";
    } else if (heart.classList[heart.classList.length - 1] !== "text-dark") {
      heart.className = "fa fa-heart text-dark";
    }
  });

  let isLiked = false;
  getData();

  if (likedCountries.includes(country.name.common)) {
    isLiked = true;
  }

  heart.className = `fa fa-heart ${isLiked ? "text-danger" : "text-dark"}`;

  card.appendChild(cardImg);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(population);
  cardBody.appendChild(continent);
  cardBody.appendChild(capital);

  card.appendChild(cardBody);

  cardFooter.appendChild(heart);
  card.appendChild(cardFooter);

  cards.appendChild(card);
};

const createCardsList = async () => {
  for (const item of countries) {
    createCard(item);
  }
};
// filters

export { createCardsList };
