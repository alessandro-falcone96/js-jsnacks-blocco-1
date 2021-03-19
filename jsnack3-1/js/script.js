$(document).ready(function() {

var pesoMinore = 1000;
var indexBiciMigliore = 0;

  var bici = [
    {
      'Nome': 'Cannondale',
      'Peso': '500'
    },
    {
      'Nome': 'Bianchi',
      'Peso': '700'
    },
    {
      'Nome': 'Bottecchia',
      'Peso': '600'
    },
    {
      'Nome': 'Carrera',
      'Peso': '300'
    }
  ];
  // console.log(bici);

  for (var i = 0; i < bici.length; i++) {
    if (bici[i].Peso < pesoMinore) {
      indexBiciMigliore = i;
    }
  }
  console.log(bici[indexBiciMigliore]);

});
