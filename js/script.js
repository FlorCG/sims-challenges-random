import { FAMILY_STRUCTURE } from "/data/familyStructure.js";
import { NUMBER_OF_CHILDREN } from "/data/numberChildren.js";
import { PRIMARY_INCOME } from "/data/primaryIncome.js";
import { STANDARD_CAREER_LIST } from "../data/standardCareerList.js";
import { NO_STANDARD_CAREER_LIST } from "../data/noStandardCareerList.js";
import { PROFESSIONAL_LIST } from "../data/professionalList.js";
import { GENERATIONAL_GOAL, TYPE_OF_PARTY } from "../data/generationalGoal.js";
import {
  MISCELLANEOUS_FUN,
  COLLECTION_OPTION,
} from "../data/miscellaneousFun.js";
import { ALL_CAREERS } from "../data/allCareers.js";
import { LIFE_TIME_WISH_LIST } from "../data/lifeTimeWishes.js";
import { TRAITS_LIST } from "../data/traitsList.js";

const btnGenerateFamily = document.querySelector(".generateFamily");
const textFamily = document.querySelector(".textFamily");
const textDescFamily = document.querySelector(".textDescFamily");

const btnGenerateChildren = document.querySelector(".generateChildren");
const textChildren = document.querySelector(".textChildren");

const btnGenerateCareer = document.querySelector(".generateCareer");
const typeCareer = document.querySelector(".typeCareer");
const textCareer = document.querySelector(".textCareer");

const btnGenerateCareerPartner = document.querySelector(
  ".generateCareerPartner"
);
const textCareerPartner = document.querySelector(".careerPartner");

const btnGenerateGoal = document.querySelector(".generateGoal");
const textGoal = document.querySelector(".textGoal");
const textDescriptionGoal = document.querySelector(".textDescriptionGoal");

const btnGenerateLTW = document.querySelector(".generateLTW");
const textLTW = document.querySelector(".textLTW");

const btnGenerateTraits = document.querySelector(".generateTraits");
const textTraits = document.querySelector(".textTraits");

const btnGenerateMisc = document.querySelector(".generateMisc");
const textMisc = document.querySelector(".textMisc");
const textDescriptionMisc = document.querySelector(".textDescriptionMisc");

const btnGenerateEverything = document.querySelector('.generateEverything');



function randomizeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnGenerateEverything.addEventListener('click', e=>{
   e.preventDefault();
   generateFamily();
   generateChildren();
   generateWork();
   generateWorkPartner();
   generateGoal();
   generateLTW();
   generateTraits();
   generateMiscFun();
})

function generateFamily (){
   clean(textFamily);
   randomize(FAMILY_STRUCTURE, textFamily);
   textFamily.style.fontWeight = "bold";
}

function generateChildren(){
   clean(textChildren);
   randomize(NUMBER_OF_CHILDREN, textChildren);
   textChildren.style.fontWeight = "bold";
}

function  generateWork(){
   if (typeCareer.innerHTML != "" || textCareer.innerHTML != "") {
      typeCareer.innerHTML = "";
      textCareer.innerHTML = "";
    }
    typeCareergenerator();
    typeCareer.style.fontWeight = "bold";
    textCareer.style.fontWeight = "normal";
}

function generateWorkPartner(){
   clean(textCareerPartner);
   randomize(ALL_CAREERS, textCareerPartner);
   textCareerPartner.style.fontWeight = "bold";
}

function generateGoal(){
   clean(textGoal);

   let random = randomize(GENERATIONAL_GOAL, textGoal);
   if (random === 6) {
     //clean(textGoal);
 
     let typeParty = document.createElement("span");
     let space = document.createElement("br");
     randomize(TYPE_OF_PARTY, typeParty);
     textGoal.appendChild(space);
     textGoal.appendChild(typeParty);
     textGoal.style.fontWeight = "bold";
     typeParty.style.fontWeight = "normal";
     console.log(typeParty);
   }
   textGoal.style.fontWeight = "bold";
}

function generateLTW(){
   clean(textLTW);
   randomize(LIFE_TIME_WISH_LIST, textLTW);
   textLTW.style.fontWeight = "bold";
}

function generateTraits(){
   clean(textTraits);
  
   randomize(TRAITS_LIST, textTraits);
 
   textTraits.appendChild(document.createTextNode(" - "));
   randomize(TRAITS_LIST, textTraits);
   textTraits.appendChild(document.createTextNode(" - "));
   randomize(TRAITS_LIST, textTraits);
   textTraits.appendChild(document.createTextNode(" - "));
   randomize(TRAITS_LIST, textTraits);
   textTraits.appendChild(document.createTextNode(" - "));
   randomize(TRAITS_LIST, textTraits);
 
   textTraits.style.fontWeight = "bold";
}

function generateMiscFun(){
   clean(textMisc);
   let random = randomize(MISCELLANEOUS_FUN, textMisc);
   if (random === 18) {
     //clean(textGoal);
     let collOption = document.createElement("span");
     let space = document.createElement("br");
     randomize(COLLECTION_OPTION, collOption);
     textMisc.appendChild(space);
     textMisc.appendChild(collOption);
 
     textMisc.style.fontWeight = "bold";
     collOption.style.fontWeight = "normal";
   }
   textMisc.style.fontWeight = "bold";
}

//EVENT LISTENERS

btnGenerateFamily.addEventListener("click", (e) => {
  e.preventDefault();
  generateFamily();
});

  btnGenerateChildren.addEventListener("click", (e) => {
  e.preventDefault();
  generateChildren();
});

 btnGenerateCareer.addEventListener("click", (e) => {
  e.preventDefault();
  generateWork();
});

 btnGenerateCareerPartner.addEventListener("click", (e) => {
  e.preventDefault();
  generateWorkPartner();
});

btnGenerateGoal.addEventListener("click", (e) => {
  e.preventDefault();
  generateGoal();
});
 btnGenerateLTW.addEventListener("click", (e) => {
  e.preventDefault();
  generateLTW();
});

 btnGenerateTraits.addEventListener("click", (e) => {
  e.preventDefault();
 generateTraits();
});

  btnGenerateMisc.addEventListener("click", (e) => {
  e.preventDefault();
  generateMiscFun();
});


//FUNCTIONS

function checkCareer(numero) {
  if (numero >= 1 && numero <= 9) {
    randomize(STANDARD_CAREER_LIST, textCareer);
  }

  if (numero >= 10 && numero <= 13) {
    randomize(NO_STANDARD_CAREER_LIST, textCareer);
  }
  if (numero >= 14 && numero <= 19) {
    randomize(PROFESSIONAL_LIST, textCareer);
  }
  if (numero == 20) {
    randomizeVarious();

    textCareer.appendChild(document.createTextNode(" - "));
    randomizeVarious();

    textCareer.appendChild(document.createTextNode(" - "));
    randomizeVarious();
    //console.log(random1)
  }
}

function typeCareergenerator() {
  let numero = randomize(PRIMARY_INCOME, typeCareer);
  // return numero;
  checkCareer(numero);
}

function randomizeVarious() {
  let lista = PRIMARY_INCOME;
  // console.log(lista)
  let random = getRandomItem(lista);
  //  console.log(numero)

  if (random >= 1 && random <= 9) {
    let op1 = randomize(STANDARD_CAREER_LIST, textCareer);

    let { random, listObjects } = op1;

    for (let objeto of listObjects) {
      if (objeto.roll.includes(random)) {
        STANDARD_CAREER_LIST.splice(objeto.roll - 1, 1);
      }
    }
  }
  if (random >= 10 && random <= 13) {
    let op2 = randomize(NO_STANDARD_CAREER_LIST, textCareer);
    let { random, listObjects } = op2;

    for (let objeto of listObjects) {
      if (objeto.roll.includes(random)) {
        NO_STANDARD_CAREER_LIST.splice(objeto.roll - 1, 1);
      }
    }
  }
  if (random >= 14 && random <= 19) {
    let op3 = randomize(PROFESSIONAL_LIST, textCareer);
    let { random, listObjects } = op3;

    for (let objeto of listObjects) {
      if (objeto.roll.includes(random)) {
        PROFESSIONAL_LIST.splice(objeto.roll - 1, 1);
      }
    }
  }
}

//Usado para filtrar varias carreras
function getRandomItem(listObjetos) {
  let lastElement = listObjetos[listObjetos.length - 1];
  listObjetos = listObjetos.filter((elem) => elem != lastElement);

  let lastObject = listObjetos[listObjetos.length - 1];
  let rollfromLast = lastObject.roll;

  let maxNumber = rollfromLast[rollfromLast.length - 1];

  let random = randomizeNumber(1, maxNumber);

  return random;
}

function randomize(listObjects, containerText) {
  let indexLastPosition = listObjects.length - 1;
  let lastElement = listObjects[listObjects.length - 1];
  // console.log(lastElement)
  let rollFromLastItem = lastElement.roll;

  let maxNumber = rollFromLastItem[rollFromLastItem.length - 1];

  let random = randomizeNumber(1, maxNumber);

  //Itera y selecciona la propiedad para ingresar en el HTML
  for (let objeto of listObjects) {
    if (objeto.roll.includes(random)) {
      //  console.log(objeto)

      let elementoIngresar = document.createElement("span");

      let textoAIngresar = objeto.title;
      elementoIngresar.innerHTML = textoAIngresar;

      containerText.appendChild(elementoIngresar);

      //Agrega description a Miscelaneous Fun
      if (listObjects === MISCELLANEOUS_FUN) {
        clean(textDescriptionMisc);
        let elem = document.createElement("p");
        let textoMisc = objeto.description;
        elem.innerHTML = textoMisc;
        textDescriptionMisc.appendChild(elem);
      }
      //Agrega description a Generational Goal
      if (listObjects === GENERATIONAL_GOAL) {
        clean(textDescriptionGoal);
        let elem = document.createElement("p");
        let textoGoal = objeto.description;
        elem.innerHTML = textoGoal;
        textDescriptionGoal.appendChild(elem);
      }
      //Agrega description a Family Structure
      if (listObjects === FAMILY_STRUCTURE) {
        clean(textDescFamily);
        let elem = document.createElement("p");
        let textoType = objeto.description;
        elem.innerHTML = textoType;
        textDescFamily.appendChild(elem);
      }
      //Agrega description a Type of Party (filtra)
      if (listObjects === TYPE_OF_PARTY) {
        let elem = document.createElement("p");
        let textoGoal = objeto.description;
        elem.innerHTML = textoGoal;
        textDescriptionGoal.appendChild(elem);
      }
      //Agrega description a Collection Option (filtra)
      if (listObjects === COLLECTION_OPTION) {
        // clean(textDescriptionMisc)
        let elem = document.createElement("p");
        let addText = objeto.description;
        elem.innerHTML = addText;
        textDescriptionMisc.appendChild(elem);
      }

      //Retorna el numero random para operar con él
      if (
        listObjects === PRIMARY_INCOME ||
        listObjects === GENERATIONAL_GOAL ||
        listObjects === MISCELLANEOUS_FUN
      ) {
        return random;
      }
    }
  }
  return { random, listObjects };
}

//Limpia los campos
function clean(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}



//MODAL MISCELANEO

let modalMisc = document.getElementById("modalMisc");
let modalGoal = document.getElementById("modalGoal");
let modalFamilyType = document.getElementById("modalFamilyType");

const btnGuessMisc = document.querySelector(".btnGuess");
const btnGuessGoal = document.querySelector(".btnGuessGoal");
const btnGuessFamily = document.querySelector(".btnGuessFamily");

let spanMisc = document.getElementsByClassName("close")[0];
let spanGoal = document.getElementsByClassName("closeGoal")[0];
let spanFamily = document.getElementsByClassName("closeFamily")[0];

btnGuessMisc.onclick = function () {
  modalMisc.style.display = "block";
};

spanMisc.onclick = function () {
  modalMisc.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalMisc) {
    modalMisc.style.display = "none";
  }
};

//MODAL OBJETIVO

btnGuessGoal.onclick = function () {
  modalGoal.style.display = "block";
};

spanGoal.onclick = function () {
  modalGoal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalGoal) {
    modalGoal.style.display = "none";
  }
};
//MODAL FAMILY TYPE

btnGuessFamily.onclick = function () {
  modalFamilyType.style.display = "block";
};

spanFamily.onclick = function () {
  modalFamilyType.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalFamilyType) {
    modalFamilyType.style.display = "none";
  }
};
