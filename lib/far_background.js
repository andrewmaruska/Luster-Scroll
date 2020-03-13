class FarBackground {
  constructor(ctx, posX, posY){
    this.ctx = ctx;
    this.posX = 0;
    this.posY = 0;
  }

  draw(ctx) {
    let bkgd1 = new Image();
    bkgd1.src = './assets/images/Far-Background.png';
    bkgd1.onload = () => {
      let x = 0;
      let bkgdLoop = () => {
          this.ctx.drawImage(bkgd1, x, this.posY);
          this.ctx.drawImage(bkgd1, x -= 1, this.posY);
          if (x < -224) {
            x = 0;
          }
      };

    setInterval(bkgdLoop, 100);
    };

  }



}
