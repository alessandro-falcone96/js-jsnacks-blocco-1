// JSnack5
var array1 = [9, 6, 3, 5];
var array2 = [7, 4, 1, 7, 4, 6, 4, 8, 6, 8];

if (array1.length < array2.length) {
  var numMancanti = array2.length - array1.length;
  for (var i = 1; i <= numMancanti; i++) {
    array1.push(Math.floor(Math.random() * 20));
  }
} else if (array1.length > array2.length) {
  var numMancanti = array1.length - array2.length;
  for (var i = 1; i <= numMancanti; i++) {
    array2.push(Math.floor(Math.random() * 20));
  }
}
console.log(array1);
console.log(array2);
