import { FAMILY_STRUCTURE } from "/data/familyStructure.js";
import { NUMBER_OF_CHILDREN } from "/data/numberChildren.js";
import { PRIMARY_INCOME } from "/data/primaryIncome.js";
import { STANDARD_CAREER_LIST } from "/data/standardCareerList.js";

const btnGenerate = document.querySelector(".generate");
const containerFamily = document.querySelector(".familyStructure");
const textFamily = document.querySelector(".titleFamily");
const textChildren = document.querySelector(".titleChildren");
const textTypeCareer = document.querySelector(".careerType");
const textCareer = document.querySelector(".titleCareer");



btnGenerate.addEventListener("click", e => {
    e.preventDefault(); 
    getRandom(FAMILY_STRUCTURE, textFamily);
    getRandom(NUMBER_OF_CHILDREN, textChildren);
    getRandom(PRIMARY_INCOME, textTypeCareer);
    if(textTypeCareer.innerHTML==="Carrera Estándar"){
        getRandom(STANDARD_CAREER_LIST, textCareer);
    }
   //PONER LOS DEMAS TIPOS DE CARRERA Y FILTRAR
    
    
})



function getRandom(arrayObjetos, selector){
  
   arrayObjetos;

    let item = arrayObjetos[arrayObjetos.length - 1];
    
    let itemRoll = item.roll;
    
 
   let lastItem = itemRoll[itemRoll.length - 1];
   
   let result = Math.floor(Math.random() * lastItem);
   console.log(result)

  
   //console.log(lastItem)
   for(let valor of arrayObjetos){
      
      if((valor.roll).includes(result)){
    
           const titulo = valor.title;
           selector.innerHTML = titulo;
       
      }
     
   }






 
    //console.log(arrayObjetos[i].title);
   
          
          /*  let familyStructureText = document.createElement('p');
            familyStructureText.innerHTML = titulo;
            containerFamily.appendChild(familyStructureText);*/
        
    

}

//getRandom2(FAMILY_STRUCTURE)

function getRandom2(arrayObj){
   // let {title, description, roll} = arrayObj;
    let lastItem = (arrayObj.pop().roll).pop();

    let result = Math.floor(Math.random() * lastItem);
   
    //console.log(lastItem)
    for(let valor of arrayObj){
       // console.log(valor.roll)
       if((valor.roll).includes(result)){
            console.log(valor)
       }
      
    }



}