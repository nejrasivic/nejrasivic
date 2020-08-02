window.alert("Zahvaljujemo Vam na registraciji!!");

function checkFormEntry ()
{     
 window.location.href="pocetna.html";	
	return false;
}

document.getElementById("form1").onsubmit=checkFormEntry;	
// skripta koja nam ispisuje poruku zahvale u obliku js alerta te nakon toga vraca nas na pocetnu stranicu 