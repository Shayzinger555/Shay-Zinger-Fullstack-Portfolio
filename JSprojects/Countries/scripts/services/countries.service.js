import { likedCountries } from "./localStorage.service.js";

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
};

const countriesFull = await getCountries();
let countries = [...countriesFull];

// Filters
const search = (text) => {
  countries = countriesFull.filter((item) => {
    const name = item.name.common.toLowerCase();
    return name.includes(text.toLowerCase());
  });
};
const filterAZfunction = () => {
  countries = [...countries].sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    return nameA.localeCompare(nameB);
  });
};
const filterPopfunction = () => {
  countries = [...countries].sort((a, b) => {
    const popA = a.population;
    const popB = b.population;
    return popA - popB;
  });
};
const filterContfunction = () => {
  countries = [...countries].sort((a, b) => {
    const contA = a.continents[0];
    const contB = b.continents[0];
    return contA.localeCompare(contB);
  });
};
const filterLikedfunction = () => {
  countries = countries.filter((country) =>
    likedCountries.includes(country.name.common)
  );
};
const reset = () => {
  countries = [...countriesFull];
};

const filterFunctions = () => {
  let filterIcon = document.querySelector("#filterIcon");
  let filterPopUp = document.querySelector("#filterPopUp");
  filterIcon.addEventListener("click", () => {
    filterPopUp.show();
    filterPopUp.classList.toggle("invisible");
  });
};

export {
  countries,
  reset,
  search,
  filterFunctions,
  filterAZfunction,
  filterPopfunction,
  filterContfunction,
  filterLikedfunction,
};
