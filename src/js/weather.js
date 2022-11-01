// блок з погодою
const weatherBlock = document.querySelector(".weather");

async function loadWeather() {
  weatherBlock.innerHTML = `
<div class="weather__loading">
  <img class="weather__img" src="img/loading.gif" alt="Loading...">
</div>`;

  const server =
    "https://api.openweathermap.org/data/3.0/weather?units=metric&q=Kyiv&&appid=ac3b4807bd5c5cf0b0ac4f15fd23d69a";
  const response = await fetch(server, { method: "GET" });
  const responseResult = await response.json();

  if (response.ok) {
    getWeather(responseResult);
  } else {
    weatherBlock.innerHTML = responseResult.message;
  }
}

function getWeather(data) {
  // обробляжмо і виводимо дані
  console.log(data);

  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const weatherStatus = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  const template = `
  <div class="weather__header">
    <div class="weather__main">
      <div class="weather__city">${location}</div>
      <div class="weather__status">${weatherStatus}</div>
    </div>
    <div class="weather__icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}" alt="${weatherStatus}">
    </div>
  </div>
  <div class="weather__temp">${temp}</div>
  <div class="weather__feels-like">Feels like: ${feelsLike}</div>`;

  weatherBlock.innerHTML = template;
}

if (weatherBlock) {
  loadWeather();
}

// ++++++++++++++++++

// STAR WARS

const content = document.querySelector(".content__list");
const buttonNext = document.querySelector(".content__btn");

async function loadContent() {
  const server = "https://swapi.dev/api/people";
  const response = await fetch(server, {});
  const responseResult = await response.json();

  if (response.ok) {
    getContent(responseResult);
  } else {
    content.innerHTML = responseResult.message;
  }
}

function getContent(data) {
  console.log(data);
  data.results.forEach((person) => {
    console.log(person);

    const template = `<div class="content__item" >
  <div class="content__content">${person.name}</div>
   <div class="content__content">${person.height}</div>
    <div class="content__content">${person.mass}</div>
     <div class="content__content">${person.hair_color}</div>
      <div class="content__content">${person.skin_color}</div>
  </div>
 `;

    content.innerHTML += template;
  });
}

loadContent();
