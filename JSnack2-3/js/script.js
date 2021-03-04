// JSnack3
var listaNomi = ["Alessandro", "Luigi", "Mario", "Alberto", "Antonio"];
var listaCognomi = ["Rossi", "Biondi", "Morena", "Altran", "Cataldi"];

var numRandomNomi = 0;
var numRandomCognomi = 0;
for (var i = 1; i <= 3; i++) {
  numRandomNomi = Math.floor(Math.random() * (listaNomi.length - 1));
  numRandomCognomi = Math.floor(Math.random() * (listaCognomi.length - 1));
  console.log(listaNomi[numRandomNomi] + " " + listaCognomi[numRandomCognomi]);
}
