// JSnack1
var somma = 0;

// Versione FOR
for (var i = 1; i <= 5; i++) {
  numero = parseInt(prompt("Inserisci un numero: "));
  if (!isNaN(numero)) {
    somma = somma + numero;
  }
}
alert("La somma dei numeri è: " + somma);

// Verione while
while (i <= 5) {
  numero = parseInt(prompt("Inserisci un numero: "));
  if (!isNaN(numero)) {
    somma = somma + numero;
  }
  i = i++;
}
alert("La somma dei numeri è: " + somma);
