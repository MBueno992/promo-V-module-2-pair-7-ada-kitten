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
const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenRaceOne = 'Siamés';

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenRaceTwo = 'Sphynx';

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenRaceThree = 'Maine Coon';

const kittenOne = ` <li class="card">
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
</li>`;

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

michis.innerHTML = kittenOne + kittenTwo + kittenThree;

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

function renderKitten(kittenData) {
  const html = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kittenData.img}"
      alt="imagen de gato"
    />
    <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">
    ${kittenData.desc}
    </p>
  </article>
  </li>`;
  michis.innerHTML += html;
}

function addNewKitten(event) {
  event.preventDefault();
   const kittenData ={
    image: inputPhoto.value,
    name: inputName.value,
    desc: inputDesc.value,
    race: inputRace.value,
  }
  if (kittenData.desc === '' || kittenData.image === '' || kittenData.name === '') {

    labelMessageError.innerHTML ='¡Uy! parece que has olvidado algo';

  }else{ 
    labelMessageError.innerHTML = 'Gatito añadido correctamente';
    renderKitten(kittenData);
   };
  }

addKitten.addEventListener('click', addNewKitten);

// ejercicio filtrar 
const filterKitten = (event) => {
  event.preventDefault();
  michis.innerHTML = '';
  const descrSearchText = input_search_desc.value;
  const race = raceFilter.value;
  if (kittenDescOne.includes(descrSearchText)) {
    michis.innerHTML += kittenOne;
  }
  if (kittenRaceOne.includes(race)){
    michis.innerHTML += kittenOne;
  }
  if (kittenDescTwo.includes(descrSearchText) || kittenRaceTwo.includes(race)) {
    michis.innerHTML += kittenTwo;
  }
  if (kittenDescThree.includes(descrSearchText) || kittenRaceThree.includes(race)) {
    michis.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener('click', filterKitten);