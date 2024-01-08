'use strict';

console.log("Ready");

const list = document.querySelector(".js-list");

const kittenImageOne = `https://dev.adalab.es/gato-siames.webp`;
const kittenNameOne = `Anastacio`;
const kittenDescOne = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenRaceOne = `Siamés`;

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenImageOne} 
    alt="gatito"
  />
  <h3 class="card_title"> ${kittenNameOne} </h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description"> ${kittenDescOne}</p>
</article>
</li>`;

const kittenImageTwo = `https://dev.adalab.es/sphynx-gato.webp`;
const kittenNameTwo = `Fiona`;
const kittenDescTwo = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenRaceTwo = `Sphynx`;

const kittenTwo = `<li class="card">
  <img class="card_img" 
  src=${kittenImageTwo}
  alt="sphynx-cat" />

<h3 class="card_title">${kittenNameTwo}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description"> ${kittenDescTwo}</p>
</li>`;

const kittenImageThree = `https://dev.adalab.es/maine-coon-cat.webp`;
const kittenNameThree = `Cielo`;
const kittenDescThree = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenRaceThree = `Maine Coon`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenImageThree}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenNameThree}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description"> ${kittenDescThree}</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

if (kittenDescOne.includes(descrSearchText)) {
  console.log(`${descrSearchText} = ${kittenOne}`);
}

if (kittenDescTwo.includes(descrSearchText)) {
  console.log(`${descrSearchText} = ${kittenTwo}`);
}

if (kittenDescThree.includes(descrSearchText)) {
  console.log(`${descrSearchText} = ${kittenThree}`);
}

//Ejercicio 4: Eventos.


const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const labelMessageError = document.querySelector(".js-label-error");

const valueDesc = inputDesc.value;
const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueRace = inputRace.value;

if (
  valueDesc === "" || valuePhoto === "" || valueName === "" || valueRace === ""
)  {
  labelMessageError.innerHTML = "Uy, parece que te has olvidado algo";
} else {
  labelMessageError.innerHTML = "";
}


const buttonCancelForm = document.querySelector(".js-button-cancel");
const newFormElement = document.querySelector(".js-new-form");

/*buttonCancelForm.addEventListener("click", (event) => {
  event.preventDefault();
  newFormElement.classList.add("collapsed");
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  inputRace.value = "";
});*/


//Ejercicio 5: Mostrar/ocultar formulario.

const circle = document.querySelector(".js-circle");

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}


function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm (event) {
  event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
      showNewCatForm();
    } else {
      hideNewCatForm();
    }
}

circle.addEventListener('click', handleClickNewCatForm);

//Ejercicio 5: Adicionar nuevo gatito.
const button = document.querySelector(".js-btn-add");

button.addEventListener("click", (addNewKitten) =>{
  console.log("pepo");
});

function addNewKitten(event){

}