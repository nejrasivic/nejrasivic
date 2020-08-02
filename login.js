
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var err=document.getElementById("error").innerHTML;
// ispisuje se poruka korisniku da polja ne smiju ostati prazna 
if(username==""){alert("Korisničko ime ne smije biti prazno");} if(password==""){alert("Polja ne smiju ostati prazna");}
// ako program pročita iz baze da su korisničko ime i lozinka tačni ispisuje se poruka da smo se uspješno prijavili
if ( username == "negative" && password == "naseeb"){
document.getElementById("error").innerHTML="Prijavili ste se uspješno";
window.location = "pocetna.html";
return false;
}
document.getElementById("error").innerHTML="<br>Netačno korisničko ime i password"+"<br>Imate još "+maxTry+" pokušaja.";
