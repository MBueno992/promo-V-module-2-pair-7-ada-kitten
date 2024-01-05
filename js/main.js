'use strict';

//constantes
const michis = document.querySelector('.js-list');
const input_search_desc = document.querySelector('.js_in_search_desc');
const formSection = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const buttonSearch = document.querySelector('.js-button-search');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const kittenButton = document.querySelector('.js-AdaKitten');
const addKitten = document.querySelector('.js-btn-add');
const raceFilter = document.querySelector('.js-inputRace');

// 01. Mostrar gatitos desde JS
/*const kittenOne = ` <li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImageOne}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">
  ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src=${kittenImageTwo}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">
${kittenDescTwo}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenImageThree}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">
${kittenDescThree}
</p>
</li>`;*/

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: ' Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//michis.innerHTML = kittenOne + kittenTwo + kittenThree;

/*let html = '';

  if (kittenRaceOne === "") {
    html.add = `Uy que despiste, no sabemos su raza`;

  } else {
    html = kittenRaceOne;
  }*/

//Ejercicio 4. Eventos

//Al pulsar el botón cancelar se cierra el formulario, faltaría resetear los campos.
buttonCancelForm.addEventListener('click', (event) => {
  event.preventDefault();
  formSection.classList.add('collapsed');
});

//Ejercicio Funciones I - Formulario: Mostrar/ocultar

function hideNewCatForm() {
  formSection.classList.add('collapsed');
}
function showNewCatForm() {
  formSection.classList.remove('collapsed');
}

function handleClickNewCatForm() {
  if (formSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

kittenButton.addEventListener('click', handleClickNewCatForm);

//Ejercicio Adicionar nuevo gatito

function renderKitten(kitten) {
  const html = `<li class="card">
  <article>
    <img class="card_img" src="${kitten.image}" alt="imagen de gato">
    <h3 class="card_title">${kitten.name}</h3>
    <h4 class="card_race">${kitten.race}</h4>
    <p class="card_description">
    ${kitten.desc}
    </p>
  </article>
  </li>`;

  return html;
}

function addNewKitten(event) {
  event.preventDefault();
  const kittenData = {
    image: inputPhoto.value,
    name: inputName.value,
    desc: inputDesc.value,
    race: inputRace.value,
  };
  if (
    kittenData.desc === '' ||
    kittenData.image === '' ||
    kittenData.name === ''
  ) {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    labelMessageError.innerHTML = 'Gatito añadido correctamente';
    renderKitten(kittenDataList[4]=kittenData);
  }
}

renderKitten(kittenDataList);

addKitten.addEventListener('click', addNewKitten);

// ejercicio filtrar
/*const filterKitten = (event) => {
  event.preventDefault();
  michis.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  const raceValue = raceFilter.value;
  if (
    kittenDataList[0].desc.includes(descrSearchText) ||
    kittenDataList[0].race.includes(raceValue)
  ) {
    michis.innerHTML += renderKitten(kittenDataList[0]);
  }

  if (
    kittenDataList[1].desc.includes(descrSearchText) ||
    kittenDataList[1].race.includes(raceValue)
  ) {
    michis.innerHTML += renderKitten(kittenDataList[1]);
  }
  if (kittenDataList[2].desc.includes(descrSearchText)) {
    michis.innerHTML += renderKitten(kittenDataList[2]);
  }
};

buttonSearch.addEventListener('click', filterKitten);*/

function dataBase() {
  michis.innerHTML =
    renderKitten(kittenDataList[0]) +
    renderKitten(kittenDataList[1]) +
    renderKitten(kittenDataList[2]);
}
dataBase();
