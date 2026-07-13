/*
=====================================================
 Empire911 Unit Management System
 Sprint 2.0
=====================================================
*/


let units = [];





function createUnit(data){


    const unit = {


        id:
        crypto.randomUUID(),


        callsign:
        data.callsign,


        officer:
        data.officer,


        department:
        data.department,


        status:
        "Available",


        assignedIncident:
        null,


        radio:
        data.radio || "Dispatch",


        updated:
        new Date()



    };



    units.push(unit);



    renderUnits();


    updateUnitCounters();



    return unit;


}






function getAvailableUnits(){


    return units.filter(

        unit =>
        unit.status === "Available"

    );


}







function updateUnitStatus(
    id,
    status
){


    const unit =
    units.find(
        u=>u.id===id
    );



    if(!unit)
    return;



    unit.status =
    status;



    unit.updated =
    new Date();



    renderUnits();


    updateUnitCounters();


}








function assignUnit(
    unitID,
    incidentID
){


    const unit =
    units.find(
        u=>u.id===unitID
    );



    if(!unit)
    return;



    unit.assignedIncident =
    incidentID;


    unit.status =
    "Dispatched";



    renderUnits();


    updateUnitCounters();


}








function renderUnits(){


    const table =
    document.getElementById(
        "unitTable"
    );



    if(!table)
    return;




    if(
        units.length===0
    ){

        table.innerHTML =

        `

        <tr>

        <td colspan="6">

        No units online

        </td>

        </tr>

        `;


        return;

    }




    table.innerHTML="";



    units.forEach(
    unit=>{


        table.innerHTML +=


        `

        <tr>

        <td>
        ${unit.callsign}
        </td>


        <td>
        ${unit.officer}
        </td>


        <td>
        ${unit.department}
        </td>


        <td>
        ${unit.status}
        </td>


        <td>
        ${unit.assignedIncident || "None"}
        </td>


        <td>
        ${unit.radio}
        </td>


        </tr>


        `;



    });



}







function updateUnitCounters(){


    const available =
    units.filter(
        u=>u.status==="Available"
    ).length;



    const busy =
    units.filter(
        u=>u.status==="Busy"
    ).length;



    const enroute =
    units.filter(
        u=>u.status==="En Route"
    ).length;



    const onscene =
    units.filter(
        u=>u.status==="On Scene"
    ).length;



    console.log({

        available,

        busy,

        enroute,

        onscene

    });


}
