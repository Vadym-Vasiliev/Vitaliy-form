const tabs = document.querySelectorAll(".tabs__input");
const tabsContent = document.querySelector(".tabs__content");
const tabsMore = document.querySelector(".tabs__more");

let currentPage = 1;

async function loadTabContent(page) {
  const server = `https://swapi.dev/api/people?page=${page}`;
  const response = await fetch(server);
  const responseResult = await response.json();

  if (response.ok) {
    getTabContent(responseResult);
    currentPage++;
  } else {
    tabsContent.innerHTML = responseResult.message;
  }
}

function getTabContent(data) {
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
tabsMore.addEventListener("click", () => {
  loadTabContent(currentPage);
});

loadTabContent(currentPage);
