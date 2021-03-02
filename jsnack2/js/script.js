// JSnack 2
var parola1 = prompt("Inserisci la prima parola: ");
var parola2 = prompt("Inserisci la seconda parola: ");
if (parola1.length > parola2.length) {
  alert(parola2 + " " + parola1);
} else if (parola1.length < parola2.length) {
  alert(parola1 + " " + parola2);
} else {
  alert("Le due parole inserite hanno la stessa lunghezza");
}
