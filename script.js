import { getDataAPI } from "./commponents/commponentOne.js";
import { addCountryhtml } from "./commponents/addCountry.js";
//SELECTIONS
const body = document.querySelector("body");
const backgroundNav = document.querySelector(".bg1");
const backgroundMain = document.querySelector(".bg2");
const moonIcon = document.querySelector(".moon");
const selectfilter = document.querySelector(".filtered");
const countries = document.querySelector(".countries");
//GET API
async function API() {
  const regionAll = await getDataAPI();
  const regionAsia = regionsfilter("Asia", regionAll);
  const regionEurope = regionsfilter("Europe", regionAll);
  const regionAfrica = regionsfilter("Africa", regionAll);
  const regionAmericas = regionsfilter("Americas", regionAll);
  const regionOceania = regionsfilter("Oceania", regionAll);
  getInformation(regionAll);
  selectfilter.addEventListener("change", changevalue);

  function changevalue() {
    countries.innerHTML = "";
    let select = selectfilter.value;
    if (select === "All") {
      getInformation(regionAll);
    }
    if (select === "Asia") {
      getInformation(regionAsia);
    }
    if (select === "Europe") {
      getInformation(regionEurope);
    }
    if (select === "Africa") {
      getInformation(regionAfrica);
    }
    if (select === "Americas") {
      getInformation(regionAmericas);
    }
    if (select === "Oceania") {
      getInformation(regionOceania);
    }
  }
}
API();
function regionsfilter(reg, data) {
  if (reg === "Asia") {
    return data.filter((el) => {
      return el.region === "Asia";
    });
  }
  if (reg === "Europe") {
    return data.filter((el) => {
      return el.region === "Europe";
    });
  }
  if (reg === "Africa") {
    return data.filter((el) => {
      return el.region === "Africa";
    });
  }
  if (reg === "Americas") {
    return data.filter((el) => {
      return el.region === "Americas";
    });
  }
  if (reg === "Oceania") {
    return data.filter((el) => {
      return el.region === "Oceania";
    });
  }
}
//DARK MODE
function darkMode() {
  let state = "light";
  moonIcon.addEventListener("click", (e) => {
    if (state === "light") {
      backgroundNav.style.backgroundColor = "var(--Dark-Blue)";
      backgroundMain.style.backgroundColor = "var(--Very-Dark-Blue)";
      moonIcon.src = moonIcon.dataset.urldark;
      selectfilter.style.backgroundColor = "var(--Dark-Blue)";
      selectfilter.style.color = "var(--White)";
      body.style.color = "var(--White)";
      state = "dark";
      return;
    }
    if (state === "dark") {
      backgroundNav.style.backgroundColor = "var(--White)";
      backgroundMain.style.backgroundColor = "var(--Very-Light-Gray)";
      moonIcon.src = moonIcon.dataset.urllight;
      selectfilter.style.backgroundColor = "var(--Very-Light-Gray)";
      selectfilter.style.color = "black";
      body.style.color = "black";
      state = "light";
    }
  });
}
darkMode();
function getInformation(API) {
  API.forEach((country) => {
    const namecountry = country.name;
    const population = String(country.population);
    const region = country.region;
    const capital = country.capital;
    const flag = country.flags.png;
    countries.insertAdjacentHTML(
      "beforeend",
      addCountryhtml(flag, namecountry, population, region, capital)
    );
  });
}
