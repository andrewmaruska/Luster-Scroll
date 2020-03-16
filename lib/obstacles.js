class Obstacles {
  constructor(ctx, currentObst, posX, obSpeed){
    this.ctx = ctx;
    this.posX = (Math.floor(Math.random() * 200) + 200);
    this.currentObst = currentObst;
    this.obSpeed = 8;
  }



  draw(ctx) {

    let xaxis = this.posX;

    ctx.drawImage(this.currentObst, this.posX, 60, 36, 34);
    this.posX -= this.obSpeed;


      if (this.posX < -55) {
        this.posX = (Math.floor(Math.random() * 224) + 200);
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
        this.currentObst = obts[(Math.floor(Math.random() * 5))];
        // let zebra = new Obstacles(this.ctx, currentObst, 505);
      }
    }




}
