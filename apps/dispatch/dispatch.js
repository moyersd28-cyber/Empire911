/*
=====================================================
 Empire911 Dispatch Operations
 Sprint 1.0 Dispatch Engine
=====================================================
*/


let incidents = [];

let radioEntries = [];

let incidentCounter = 1;



// Initialize

document.addEventListener(
"DOMContentLoaded",
()=>{

    initializeDispatch();

});





function initializeDispatch(){

    updateClock();

    addRadioEntry(
        "System",
        "Dispatch Operations initialized"
    );


    document
    .querySelector(".primary-btn")
    .addEventListener(
        "click",
        createIncident
    );


}





/*
=====================================================
 INCIDENT SYSTEM
=====================================================
*/


function createIncident(){


    const type =
    document.getElementById(
        "callType"
    ).value.trim();



    const priority =
    document.getElementById(
        "priority"
    ).value;



    const location =
    document.getElementById(
        "location"
    ).value.trim();



    const caller =
    document.getElementById(
        "caller"
    ).value.trim();



    const notes =
    document.getElementById(
        "notes"
    ).value.trim();




    if(!type || !location){

        alert(
        "Call Type and Location are required."
        );

        return;

    }





    const incident = {


        id:
        generateIncidentNumber(),


        type,

        priority,

        location,

        caller,

        notes,


        status:
        "Pending Dispatch",


        assignedUnits:[],


        created:
        new Date()



    };



    incidents.push(
        incident
    );



    renderIncidents();



    addRadioEntry(
        "Dispatch",
        `${incident.id} created - ${incident.type}`
    );



    clearIncidentForm();



}





function generateIncidentNumber(){


    const year =
    new Date()
    .getFullYear()
    .toString()
    .slice(-2);



    const number =
    String(
        incidentCounter++
    )
    .padStart(
        4,
        "0"
    );



    return `${year}-${number}`;


}







function renderIncidents(){


    const container =
    document.getElementById(
        "incidentList"
    );



    const counter =
    document.querySelector(
        ".counter"
    );



    counter.textContent =
    `${incidents.length} Active`;




    if(
        incidents.length === 0
    ){

        container.innerHTML =

        `
        <div class="empty-state">
        No active incidents
        </div>
        `;

        return;

    }





    container.innerHTML="";



    incidents.forEach(
    incident=>{


        const card =
        document.createElement(
            "div"
        );


        card.className =
        "incident-card";



        card.innerHTML =


        `

        <strong>
        ${incident.id}
        </strong>


        <p>
        ${incident.type}
        </p>


        <p>
        Priority:
        ${incident.priority}
        </p>


        <p>
        Location:
        ${incident.location}
        </p>


        <small>
        ${incident.status}
        </small>

        `;



        container.appendChild(
            card
        );



    });


}






function clearIncidentForm(){


    document.getElementById(
        "callType"
    ).value="";


    document.getElementById(
        "location"
    ).value="";


    document.getElementById(
        "caller"
    ).value="";


    document.getElementById(
        "notes"
    ).value="";


}









/*
=====================================================
 RADIO SYSTEM
=====================================================
*/


function addRadioEntry(
    source,
    message
){


    const time =
    new Date()
    .toLocaleTimeString();



    radioEntries.unshift({

        time,

        source,

        message

    });



    renderRadio();

}





function renderRadio(){


    const log =
    document.getElementById(
        "radioLog"
    );



    log.innerHTML="";



    radioEntries
    .slice(0,10)
    .forEach(
    entry=>{


        log.innerHTML +=

        `

        <div class="radio-entry">

        ${entry.time}

        <strong>
        ${entry.source}
        </strong>

        :

        ${entry.message}

        </div>

        `;


    });



}








/*
=====================================================
 CLOCK
=====================================================
*/


function updateClock(){


    const clock =
    document.getElementById(
        "clock"
    );



    setInterval(
    ()=>{


        const now =
        new Date();



        clock.textContent =
        now.toLocaleTimeString();


    },
    1000
    );


}
