// JSnack 8
var numero = prompt("Inserisci un numero a quattro cifre: ");
var somma = 0;
for (var i = 0; i < numero.length; i++) {
  somma = somma + parseInt(numero[i]);
}
alert("La somma delle quattro cifre del numero è: " + somma);
