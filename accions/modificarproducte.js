// Documentació:
// https://www.w3schools.com/xml/ajax_intro.asp
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

function commandPeticio2() {
	// Variables locals
	var urlCodi = "http://localhost/daw2_m07uf1_projecte_grup09/accions/modificarproducte.php?n=";
	var metode = "PUT";
	// Dades rebudes d'HTML
	var nomComanda = document.forms['formulari2'].elements["form_codeproduct"].value;
	var nomComanda2 = document.forms['formulari2'].elements["form_dataoption"].value;
    var nomComanda3 = document.forms['formulari2'].elements["form_changedata"].value;
	// Enviament dades a PHP
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4) { 
			if ((xhttp.status == 200) || (xhttp.status == 403) || (xhttp.status == 404) || (xhttp.status == 405)){ 
				document.getElementById("resp2").innerHTML = xhttp.responseText;
			}
		}
	}
	xhttp.open(metode,urlCodi + nomComanda + "&p=" + nomComanda2 + "&d=" + nomComanda3,true);
	xhttp.send();				
}

function netForm2() {
	document.getElementById("resp2").innerHTML ="";
	document.forms['formulari2'].elements["form_codeproduct"].value ="";
    document.forms['formulari2'].elements["form_dataoption"].value ="";
    document.forms['formulari2'].elements["form_changedata"].value ="";
	location.reload();
}