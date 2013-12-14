Crafty.scene('sceneSplashScreen', function () {

  var title = 'You Only Get One Shot At This!';

  Crafty.background('rgb(0,0,0)');

  Crafty.e('2D, Canvas, Text')
    .attr({x: 100, y: 140})
    .textFont({family: 'mono', size: '45px'})
    .textColor('#eeeeee', 1)
    .text(title);

  Crafty.e('2D, Canvas, Color, Mouse, Keyboard')
    .attr({x: 320, y: 300, w: 90, h: 53})
    .color('rgb(120,120,120)')
    .attach(
      Crafty.e('2D, Canvas, Text')
        .attr({x: 323, y: 300})
        .textFont({family: 'mono', size: '45px'})
        .text('Play')
    )
    .bind('Click', function () {
      Crafty.scene('sceneGame');
    });

});