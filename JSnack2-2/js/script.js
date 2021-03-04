// JSnack2

do {
  var numero = parseInt(prompt("Inserisci un numero: "));
} while (isNaN(numero));

if ((numero % 2) == 0) {
  alert("Il tuo numero è pari: " + numero)
} else {
  numero += 1
  alert("Il tuo numero è dispari: " + numero);
}
