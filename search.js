'use strict';

const searchInputEl = document.getElementById('search-input');
const searchResultEl = document.querySelector('.search-results');
const searchErrorEl = document.getElementById('search-error');

searchInputEl.addEventListener('keyup', async e => {
  if (e.key === 'Enter') {
    searchResultEl.innerHTML = '';
    searchErrorEl.textContent = '';
    input = searchInputEl.value;
    input = input.toLowerCase();
    let planet = await fetchPlanetData();
    planet.bodies.forEach(planet => {
      let planetName = planet.name.toLowerCase();
      let planetType = planet.type.toLowerCase();
      if (planetName.includes(input)) {
        searchResults(planet);
        noResult = true;
      }
      if (planetType.includes(input)) {
        searchResults(planet);
      }
    });
  }
});

function searchResults(planet) {
  let searchItem = document.createElement('li');
  let planetName = document.createElement('h2');
  planetName.innerHTML = planet.name;
  searchItem.appendChild(planetName);
  searchResultEl.appendChild(searchItem);
  searchItem.addEventListener('click', function () {
    updateChosenPage(planet);
  });
}
