'use strict';

const planetCardEl = document.getElementById('planetCard');
const planetNameEl = document.getElementById('planet-name');
const planetRotationEl = document.getElementById('planet-rotation');
const planetDescEl = document.getElementById('planet-description');
const planetTypeEl = document.getElementById('planet-type');
const planetTempEl = document.getElementById('planet-temp');
const planetDistanceEl = document.getElementById('planet-distance');
const planetImgEl = document.getElementById('planet-img');

let planet = window.localStorage.getItem('planet');
let imgSource = window.localStorage.getItem('imgSource');

randomEl.addEventListener('click', function () {
  fetchPlanetRandom();
});

planet = JSON.parse(planet);
planetNameEl.innerText = planet.name;
planetDescEl.innerText = planet.desc;
planetRotationEl.innerText = `Rotation: ${planet.rotation}`;
planetDistanceEl.innerText = `Avstånd från Solen: ${planet.distance}`;
planetTempEl.innerText = `Temp under dagen: ${planet.temp.day} Temp under natten: ${planet.temp.night}`;
planetTypeEl.innerText = `Typ: ${planet.type}`;
// planetImgEl.src = 'img/burning-sun.png';
chosenPlanetImg(planet);

function chosenPlanetImg(planet) {
  switch (planet.id) {
    case 0:
      planetImgEl.src = 'img/burning-sun.png';
      break;
    case 1:
      planetImgEl.src = 'img/Mercury-PNG-Images-HD.png';
      break;
    case 2:
      planetImgEl.src = 'img/Venus-PNG-Background.png';
      break;
    case 3:
      planetImgEl.src = 'img/earth.png';
      break;
    case 4:
      planetImgEl.src = 'img/NicePng_planet-png_1788418.png';
      break;
    case 5:
      planetImgEl.src = 'img/Jupiter-PNG-Free-Download.png';
      break;
    case 6:
      planetImgEl.src = 'img/saturn.png';
      break;
    case 7:
      planetImgEl.src = 'img/uranus.png';
      break;
    case 8:
      planetImgEl.src = 'img/neptune.png';
      break;
  }
}
