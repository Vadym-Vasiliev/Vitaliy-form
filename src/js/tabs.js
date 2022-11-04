const tabs = document.querySelectorAll(".tabs__input");
const tabsContent = document.querySelector(".tabs__content");
const tabsMore = document.querySelector(".tabs__more");

let currentPage = 1;

function getInitialContent() {
  const activeInput = document.querySelector(".tabs__input:checked");
  const currentParam = activeInput.getAttribute("data-endpoint");
  loadTabContent(currentParam, currentPage);
}

tabs.forEach((tab) => {
  tab.addEventListener("change", () => {
    currentPage = 1;
    const currentParam = tab.getAttribute("data-endpoint");
    tabsContent.innerHTML = "";

    loadTabContent(currentParam, currentPage);
  });
});

async function loadTabContent(param, page) {
  const server = `https://swapi.dev/api/${param}?page=${page}`;
  const response = await fetch(server);
  const responseResult = await response.json();

  if (response.ok) {
    switch (param) {
      case "people":
        getPeopleContent(responseResult);
        break;
      case "starships":
        getStarshipsContent(responseResult);
        break;
      case "vehicles":
        getVehiclesContent(responseResult);
        break;
      case "planets":
        getPlanetsContent(responseResult);
        break;
      default:
        tabsContent.innerHTML = responseResult.message;
        break;
    }
    currentPage++;
  } else {
    tabsContent.innerHTML = responseResult.message;
  }
}

function getPeopleContent(data) {
  console.log(data);

  data.results.forEach((person) => {
    const template = `<div class="tabs__list-content">
  <div class="tabs__item-content">${person.name}</div>
   <div class="tabs__item-content">${person.height}</div>
    <div class="tabs__item-content">${person.mass}</div>
     <div class="tabs__item-content">${person.hair_color}</div>
      <div class="tabs__item-content">${person.skin_color}</div>
  </div>
 `;

    tabsContent.innerHTML += template;
  });
}

function getStarshipsContent(data) {
  console.log(data);

  data.results.forEach((starship) => {
    const template = `<div class="tabs__list-content">
  <div class="tabs__item-content">${starship.name}</div>
   <div class="tabs__item-content">${starship.model}</div>
    <div class="tabs__item-content">${starship.manufacturer}</div>
     <div class="tabs__item-content">${starship.cost_in_credits}</div>
      <div class="tabs__item-content">${starship.length}</div>
  </div>
 `;

    tabsContent.innerHTML += template;
  });
}

function getVehiclesContent(data) {
  console.log(data);

  data.results.forEach((vehicle) => {
    const template = `<div class="tabs__list-content">
  <div class="tabs__item-content">${vehicle.name}</div>
   <div class="tabs__item-content">${vehicle.model}</div>
    <div class="tabs__item-content">${vehicle.manufacturer}</div>
     <div class="tabs__item-content">${vehicle.cost_in_credits}</div>
      <div class="tabs__item-content">${vehicle.length}</div>
  </div>
 `;

    tabsContent.innerHTML += template;
  });
}

function getPlanetsContent(data) {
  console.log(data);

  data.results.forEach((planet) => {
    const template = `<div class="tabs__list-content">
  <div class="tabs__item-content">${planet.name}</div>
   <div class="tabs__item-content">${planet.rotation_period}</div>
    <div class="tabs__item-content">${planet.orbital_period}</div>
     <div class="tabs__item-content">${planet.diameter}</div>
      <div class="tabs__item-content">${planet.climate}</div>
  </div>
 `;

    tabsContent.innerHTML += template;
  });
}

tabsMore.addEventListener("click", () => {
  getInitialContent();
});

getInitialContent();
