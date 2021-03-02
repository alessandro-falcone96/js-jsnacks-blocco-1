// JSnack 3
var somma = 0;
for (var i = 1; i <= 10; i++) {
  var num = parseInt(prompt("Inserisci un numero: "));
  if (isNaN(num)) {
    somma += 0;
  } else {
    somma = somma + num;
  }
}
alert("La somma di tutti i numeri è: " + somma)
