let incidents = [];



function openCallForm(){

document.getElementById(
"callModal"
).style.display="flex";

}



function closeCallForm(){

document.getElementById(
"callModal"
).style.display="none";

}



function createIncident(){


let incident = {


id:
"INC-" + Date.now(),


type:
document.getElementById("callType").value,


priority:
document.getElementById("priority").value,


location:
document.getElementById("location").value,


notes:
document.getElementById("notes").value


};



incidents.push(incident);



renderIncidents();



closeCallForm();



}



function renderIncidents(){


let list =
document.getElementById(
"incidentList"
);



list.innerHTML="";



incidents.forEach(call=>{


list.innerHTML += `

<div class="incident-card">

<h3>
${call.id}
</h3>

<p>
<strong>Type:</strong>
${call.type}
</p>

<p>
<strong>Priority:</strong>
${call.priority}
</p>

<p>
<strong>Location:</strong>
${call.location}
</p>

<p>
${call.notes}
</p>


</div>

`;

});


}
