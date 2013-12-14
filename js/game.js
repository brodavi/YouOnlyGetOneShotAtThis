// Init Crafty:
Crafty.init(800, 600, 'crafty');
Crafty.background('rgb(127,127,127)');

var A = {
  constTick: 0,
  gameTick: 0,
  count: 10
};

window.onload = function () {
  // disable scrolling
  document.onkeydown = function () {
    return event.keyCode != 38
      && event.keyCode != 40
      && event.keyCode != 32;
  };

  Crafty.e('TickManager, Keyboard')
    .attr(
      {
        slowMod: 5,
        paused: false
      }
    )
    .bind('EnterFrame', function () {

      A.constTick = A.constTick + 1;
      if (this.paused) {
        return;
      }

      if (A.slowMo) {
        console.log('slomo');
        if (A.constTick % this.slowMod === 0) {
          A.gameTick = A.gameTick + 1;
          Crafty.trigger('GameTick');
        }
      } else {
        if (A.constTick % 2 === 0) {
          A.gameTick = A.gameTick + 1;
          Crafty.trigger('GameTick');
        }
      }

    });

  //Crafty.scene('sceneSplashScreen');
  Crafty.scene('sceneGame');
};
