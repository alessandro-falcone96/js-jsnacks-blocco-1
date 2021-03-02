// JSnack 5
var numeriDispari = [];
for (var i = 1; i <= 6; i++) {
  var numero = prompt("Inserisci un numero: ");
  if ((numero % 2) != 0) {
    numeriDispari.push(numero);
  }
}
alert(numeriDispari);
