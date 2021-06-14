// Documentació:
// https://www.w3schools.com/xml/ajax_intro.asp
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

function commandPeticio() {
	// Variables locals
	var urlCodi = "http://localhost/daw2_m07uf1_projecte_grup09/peticionsrecepcions/repPeticionsusersdelete.php?n=";
	var metode = "DELETE";
	// Dades rebudes d'HTML
	var nomComanda = document.forms['formulari'].elements["form_iduser"].value;


	// Enviament dades a PHP
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4) { 
			if ((xhttp.status == 200) || (xhttp.status == 403) || (xhttp.status == 404) || (xhttp.status == 405)){ 
				document.getElementById("resp").innerHTML = xhttp.responseText;
			}
		}
	}
	xhttp.open(metode,urlCodi + nomComanda,true);
	xhttp.send();				
}

function netForm() {
	document.getElementById("resp").innerHTML ="";
	document.forms['formulari'].elements["form_iduser"].value ="";
	location.reload();
}