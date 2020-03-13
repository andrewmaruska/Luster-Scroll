document.addEventListener('DOMContentLoaded', () => {
  const budgieGame = document.getElementById('budgie-game');
  const gameCtx = budgieGame.getContext('2d');

  const budgieBkgd2 = document.getElementById('budgie-bkgd2');
  const bkgd2Ctx = budgieBkgd2.getContext('2d');

  const budgieBkgd1 = document.getElementById('budgie-bkgd1');
  const bkgd1Ctx = budgieBkgd1.getContext('2d');

  const budgieGround = document.getElementById('budgie-floor');
  const groundCtx = budgieGround.getContext('2d');

  let dog1 = new Image();
  dog1.src ='./assets/images/ML.png';
  const Budgie = new Dog(gameCtx, dog1);

  let vent = new Image();
  vent.src ='./assets/images/GERM.png';
  let barrier = new Image();
  barrier.src ='./assets/images/GERM.png';
  let cart = new Image();
  cart.src ='./assets/images/GERM.png';
  let trash = new Image();
  trash.src ='./assets/images/GERM.png';
  let phone = new Image();
  phone.src ='./assets/images/GERM.png';
  const obts = [vent, barrier, cart, trash, phone];
  let currentObst = obts[(Math.floor(Math.random() * 5))];
  let zebra = new Obstacles(gameCtx, currentObst, 505);

  let fps = 30;
  let now;
  let then = Date.now();
  let interval = 2500/fps;
  let slowBoy;



  const playgame = new Game(gameCtx, budgieGame, bkgd1Ctx, bkgd2Ctx, groundCtx, Budgie, zebra,  start, beginGame);
  playgame.farbkgdDraw(bkgd1Ctx);
  playgame.nearbkgdDraw(bkgd2Ctx);
  playgame.groundDraw(groundCtx);
  playgame.gameOver();


  function start() {
    if (playgame.defeated === false) {

      window.requestAnimationFrame(start);
      // squirrels.going = false;
      playgame.gameOver();
      // playgame.startScore();
      playgame.started = true;
      now = Date.now();
      // playgame.raiseScore();
      slowBoy = now - then;
      if (slowBoy > interval) {
        gameCtx.clearRect(0, 0, 224, 98);
        playgame.keepScore();
        // playgame.raiseScore();
        Budgie.draw(gameCtx);
        Budgie.jumpListener();
        zebra.draw(gameCtx);
        then = now - (slowBoy % interval);
      }
    }

  }


    function beginGame() {
      if (playgame.defeated === false) {
        // start();
        // // playgame.keepScore();
        playgame.startScore();
        budgieGame.removeEventListener('click', beginGame);
      }
    } 

  budgieGame.addEventListener('click', start );

  function squirrel() {
    squirrels.draw();
  }

  function Intro() {

    // squirrel();
    const text1 = 'Click to begin';
    gameCtx.font = 'bold 20px Helvetica';
    gameCtx.fillStyle = '#000000';
    gameCtx.textAlign = 'center';
    gameCtx.fillText(text1, 110, 80);
  }

  Intro();



});
