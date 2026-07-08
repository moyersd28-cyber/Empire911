let agency = null;


async function loadAgency(){

try{


const response = await fetch("config/agency.json");


agency = await response.json();



console.log(
"Empire911 Agency Loaded:",
agency.name
);



let elements = document.querySelectorAll("#agencyName");


elements.forEach(element=>{

element.textContent = agency.name;

});



}

catch(error){

console.error(
"Agency loading failed:",
error
);


}


}



loadAgency();
