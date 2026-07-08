let agency = null;


async function loadAgency(){

    try {

        const response = await fetch("../config/agency.json");

        agency = await response.json();


        console.log(
            "Loaded Agency:",
            agency.name
        );


    }

    catch(error){

        console.error(
            "Agency loading failed:",
            error
        );

    }

}


loadAgency();
