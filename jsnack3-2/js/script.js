$(document).ready(function() {

  var squadre = [
    {
      Nome: 'Juventus',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Inter',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Milan',
      Punti: 0,
      Falli: 0
    },
    {
      Nome: 'Roma',
      Punti: 0,
      Falli: 0
    }
  ];


  var newSquadre = [];

  for (var i = 0; i < squadre.length; i++) {
    squadre[i].Punti = Math.floor(Math.random() * 15) + 1;
    squadre[i].Falli = Math.floor(Math.random() * 15) + 1;
  }
  console.log(squadre);

  for (var i = 0; i < squadre.length; i++) {

    var obj = ({

      Nome: squadre[i].Nome,
      Falli: squadre[i].Falli

    });

    newSquadre.push(obj)

  }

  console.log(newSquadre);



});
