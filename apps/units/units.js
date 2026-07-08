let units=[];



function openUnitForm(){

document.getElementById(
"unitModal"
).style.display="flex";

}



function closeUnitForm(){

document.getElementById(
"unitModal"
).style.display="none";

}




function createUnit(){


let unit={


callsign:
document.getElementById("callsign").value,


department:
document.getElementById("department").value,


officer:
document.getElementById("officer").value,


status:
document.getElementById("status").value


};



units.push(unit);


renderUnits();


closeUnitForm();


}




function renderUnits(){


let list =
document.getElementById(
"unitList"
);



list.innerHTML="";



units.forEach(unit=>{


list.innerHTML += `

<div class="unit-card">

<h2>
${unit.callsign}
</h2>


<p>
Department:
${unit.department}
</p>


<p>
Officer:
${unit.officer}
</p>


<p>
Status:
${unit.status}
</p>


</div>


`;


});


}
