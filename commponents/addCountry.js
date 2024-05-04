export function addCountryhtml(flag, namecountry, population, region, capital) {
  return `<div class="country">
      <img src="${flag}" alt="#" class="flag" />
      <div class="information-country">
        <h3 class="name-country">${namecountry}</h3>
        <p>papulation: <span class="papulation">${population}</span></p>
        <p>region: <span class="region">${region}</span></p>
        <p>capital: <span class="capital">${capital}</span></p>
      </div>
    </div>`;
}
