$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {

    var move = (data) => {
      SwimTeam.move(data);
    }
    


  }
});

console.log('Client is running in the browser!');
