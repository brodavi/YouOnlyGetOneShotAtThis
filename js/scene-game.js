Crafty.scene('sceneGame', function () {

  var title = 'Cut The Correct Wire!';

  Crafty.background('rgb(20,20,20)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 200, y: 40})
    .textFont({family: 'mono', size: '45px'})
    .textColor('#cccccc', 1)
    .text(title);

  // The mouselistener
  Crafty.e('2D, Mouse')
    .attr({x: 0, y: 0, w: 800, h: 600})
    .bind('MouseMove', function (e) {
      hand.x = e.offsetX - hand.w;
      hand.y = e.offsetY - hand.h;
    });

  // The gameboard
  var board = Crafty.e('2D, Canvas, Color')
    .attr({x: 200, y: 200, w: 400, h: 350,
           cells: [
             [1,0,1,0,0,1,0,1,0,0],
             [1,0,0,0,0,1,1,0,1,0],
             [0,0,1,0,1,0,0,1,1,0],
             [0,1,0,0,0,1,0,1,0,0],
             [1,0,0,0,1,0,0,1,0,1],
             [0,1,0,0,1,0,1,1,0,1],
             [0,0,0,1,0,0,0,1,0,1],
             [1,1,1,0,1,0,1,0,1,1],
             [0,1,0,1,0,1,0,1,1,1],
             [1,0,0,0,0,1,1,1,0,1]
           ]
          })
    .color('rgb(20, 100, 50)');

  var cellWidth = 20
    , cellHeight = 20;
  console.log('board.cells.length: ' + board.cells.length);
  for (var y = 0; y < board.cells.length - 1; y++) {
    for (var x = 0; x < board.cells[x].length - 1; x++) {
      var r = 132 * board.cells[x][y];
      board.attach(
        Crafty.e('2D, Canvas, Color')
          .attr({x: board.x + 70 + x * cellWidth * 1.5,
                 y: board.y + 70 + y * cellHeight * 1.5,
                 w: cellWidth,
                 h: cellHeight})
          .color('rgb(' + r + ', 120, 160)')
      );
    }
  }

  // The countdown
  var time = 1000 * 60 * 2
    , currentTime = Date.now()
    , lastTime = Date.now()
    , dt = 0;
  var countdown = Crafty.e('2D, Canvas, Text')
    .attr({x: 240, y: 220})
    .textFont({family: 'mono', size: '30px'})
    .textColor('#990000', 1)
    .text(time)
    .bind('EnterFrame', function (e) {
      dt = Date.now() - lastTime;
      lastTime = Date.now();
      time = time - dt;
      countdown.text(time/1000);
    });

  // The hand (on top of board)
  var hand = Crafty.e('2D, Canvas, Color')
    .attr({x: 0, y: 0, w: 200, h: 100})
    .color('rgb(120,120,120)');

});