// JSnack 4
var listaNomi = ["Giovanni", "Gianluca", "Luigi", "Alessandro", "Anna", "Matteo"];
var invitato = false;
var nome = prompt("Inserisci il tuo nome: ");
for (var i = 0; i <= listaNomi.length; i++) {
  if (nome == listaNomi[i]) {
    invitato = true;
  }
}
if (invitato == true) {
  alert("Puoi entrare.");
} else {
  alert("Non sei in lista.");
}
