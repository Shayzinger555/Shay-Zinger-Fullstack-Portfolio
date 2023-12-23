let likedCountries = [];

const getData = () => {
  let data = localStorage.getItem("countries");
  // making sure there's data in LS
  if (!data) {
    localStorage.setItem("countries", JSON.stringify(likedCountries));
    data = localStorage.getItem("countries");
  }
  likedCountries = JSON.parse(data);
};

const updateData = (countryName) => {
  // Check if the country is already liked
  const isLiked = likedCountries.includes(countryName);

  if (isLiked) {
    likedCountries = likedCountries.filter((item) => item !== countryName);
    const storedLikedCountries =
      JSON.parse(localStorage.getItem("countries")) || [];
    const updatedStoredLikedCountries = storedLikedCountries.filter(
      (item) => item !== countryName
    );
    localStorage.setItem(
      "countries",
      JSON.stringify(updatedStoredLikedCountries)
    );
  } else {
    likedCountries.push(countryName);

    const storedLikedCountries =
      JSON.parse(localStorage.getItem("countries")) || [];
    storedLikedCountries.push(countryName);
    localStorage.setItem("countries", JSON.stringify(storedLikedCountries));
  }
};

export { likedCountries, getData, updateData };
