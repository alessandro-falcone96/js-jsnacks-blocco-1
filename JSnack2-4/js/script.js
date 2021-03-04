// JSnack4
var numeriInteri = [2, 4, 3, 7, 5, 8, 6, 20, 5, 3, 9];
var somma = 0;
for (var i = 0; i < numeriInteri.length; i++) {
  if ((i % 2) != 0) {
    somma += numeriInteri[i];
  }
}
console.log(somma);
