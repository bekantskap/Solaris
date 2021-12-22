'use strict';

const venusEl = document.getElementById('venus');
const saturnEl = document.getElementById('saturn');
const earthEl = document.getElementById('earth');
const marsEl = document.getElementById('mars');
const neptuneEl = document.getElementById('neptune');
const uranusEl = document.getElementById('uranus');
const jupiterEl = document.getElementById('jupiter');
const mercuryEl = document.getElementById('mercury');
const sunEl = document.getElementById('sun');
const listLinkEl = document.getElementById('listLink');
const randomEl = document.getElementById('random');
const astronautEl = document.getElementById('astronaut-link');
const spaceList = document.querySelector('.spaceman-list');

let input,
  rng = 0;

var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

astronautEl.onclick = function () {
  modal.style.display = 'block';
  spaceList.innerHTML = '';
  getSpacePeople();
};
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

randomEl.addEventListener('click', function () {
  getPlanetRandom();
});

function loadData() {
  getPlanetObj();
}

function randomPlanet(randomObj) {
  for (var i in randomObj) {
    let rng = Math.floor(Math.random() * randomObj[i].length);
    let planet = randomObj.bodies[rng];
    updateChosenPage(planet);
  }
}

function updateUI(planets) {
  planets.bodies.forEach(planet => {
    switch (planet.id) {
      case 0:
        sunEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 1:
        mercuryEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 2:
        venusEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 3:
        earthEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;

      case 4:
        marsEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 5:
        jupiterEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 6:
        saturnEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 7:
        uranusEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      case 8:
        neptuneEl.addEventListener('click', function () {
          updateChosenPage(planet);
        });
        break;
      default:
        break;
    }
  });
}

function updateSpacePeople(people) {
  people.people.forEach(ppl => {
    let crewMember = document.createElement('li');
    let ship = document.createElement('p');
    let name = document.createElement('p');
    name.innerText = ppl.name;
    ship.innerText = ppl.craft;
    spaceList.appendChild(crewMember);
    crewMember.appendChild(name);
    crewMember.appendChild(ship);
  });
}

async function getPlanetRandom() {
  let randomObj = await fetchPlanetData();
  randomPlanet(randomObj);
}

async function getPlanetObj() {
  let planetObj = await fetchPlanetData();
  updateUI(planetObj);
}
async function getSpacePeople() {
  let people = await fetchSpacePeopleData();
  updateSpacePeople(people);
}

async function fetchPlanetData() {
  try {
    let resp = await fetch(
      'https://fathomless-shelf-54969.herokuapp.com/bodies',
      {
        method: 'GET',
        headers: { 'x-zocom': 'solaris-i0jmhtjgqKZhp6Hl' },
      }
    );
    let data = await resp.json();
    return await data;
  } catch (err) {
    console.log(err);
  }
}

async function fetchSpacePeopleData() {
  try {
    let resp = await fetch('http://api.open-notify.org/astros.json');
    let data = await resp.json();
    return await data;
  } catch (err) {
    console.log(err);
  }
}

function updateChosenPage(planet) {
  window.localStorage.setItem('planet', JSON.stringify(planet));
  window.location.href = 'planet.html';
}
