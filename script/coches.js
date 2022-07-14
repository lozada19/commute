class Coches {
  constructor(xParam, srcParam) {
    this.image = new Image();
    this.image.src = srcParam;
    this.x = xParam + 90;
    this.y = 0;
    this.w = 40;
    this.h = 60;
    this.speed = 4;
  }

  drawCoches = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  movimientoCoches = () => {
    this.y = this.y + this.speed;
  };
}
