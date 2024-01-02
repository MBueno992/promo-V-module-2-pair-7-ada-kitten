'use strict';

const michis = document.querySelector('.js-list');

const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenRaceOne = 'Siamés';

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

const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenRaceTwo = 'Sphynx';

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

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenRaceThree = 'Maine Coon';

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

michis.innerHTML = kittenOne + kittenTwo + kittenThree;

//ejercicio condicionales
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (kittenDescOne.includes(descrSearchText)) {
  console.log(`${kittenNameOne} contiene la palabra ${descrSearchText}`);
}

if (kittenDescTwo.includes(descrSearchText)) {
  console.log(`${kittenNameTwo} contiene la palabra ${descrSearchText}`);
}

if (kittenDescThree.includes(descrSearchText)) {
  console.log(`${kittenNameThree} contiene la palabra ${descrSearchText}`);
}

/*let html = '';

  if (kittenRaceOne === "") {
    html.add = `Uy que despiste, no sabemos su raza`;

  } else {
    html = kittenRaceOne;
  }*/

//Ejercicio 4. Eventos

const formSection = document.querySelector('.js-new-form');
const kittenButton = document.querySelector('.js-AdaKitten');
formSection.classList.remove('collapsed')

const addKitten = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const buttonCancel = document.querySelector('.js-cancel')



//Al pulsar el botón cancelar se cierra el formulario, faltaría resetear los campos.
buttonCancel.addEventListener('click', (cancel)=>{
  cancel.preventDefault();
  formSection.classList.add('collapsed');
  
});

//Ejercicio FORMULARIO: MOstrar/ocultar

function showNewCatForm() {
  formSection.classList.remove('collapsed');
}
function hideNewCatForm() {
  formSection.classList.add('collapsed');
}

kittenButton.addEventListener('click', handleClickNewCatForm);

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains('collapsed')) {
    formSection.classList.remove('collapsed');
  } else {
    formSection.classList.add('collapsed');
  }
}

//Ejercicio Adicionar nuevo gatito

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueRace = inputRace.value;


function renderKitten(url, desc, name, race) {
  michis.innerHTML += (`<li class="card">
  <article>
    <img
      class="card_img"
      src= "${valuePhoto}"
      alt="siames-cat"
    />
    <h3 class="card_title">${valueName.toUpperCase()}</h3>
    <h4 class="card_race">${valueRace}</h4>
    <p class="card_description">
    ${valueDesc}
    </p>
  </article>
  </li>`);
}
renderKitten(`${valuePhoto}, ${valueName}, ${valueRace}, ${valueDesc}`)


function addNewKitten() {
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML ='¡Uy! parece que has olvidado algo';

  }else{ 
    labelMessageError.innerHTML = 'Gatito añadido correctamente';

    }
  }

addKitten.addEventListener('click', addNewKitten);