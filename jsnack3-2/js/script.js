$(document).ready(function() {

  var squadre = [
    {
      'Nome': 'Juventus',
      'Punti': '',
      'Falli': ''
    },
    {
      'Nome': 'Inter',
      'Punti': '',
      'Falli': ''
    },
    {
      'Nome': 'Milan',
      'Punti': '',
      'Falli': ''
    },
    {
      'Nome': 'Roma',
      'Punti': '',
      'Falli': ''
    }
  ];
  console.log(squadre);

  var newSquadre = [];

  for (var i = 0; i < squadre.length; i++) {
    squadre[i].Punti = Math.floor(Math.random() * 15) + 1;
    squadre[i].Falli = Math.floor(Math.random() * 15) + 1;

    newSquadre.push(squadre[i].Nome, squadre[i].Falli);
  }

  console.log(newSquadre);



  // var nietos = [];
  // nietos.push({"01": nieto.label, "02": nieto.value});
  // return nietos;




});
