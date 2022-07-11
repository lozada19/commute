class Cars {
    constructor() {
        //propiedades del carro
        this.image = new Image()
        this.image.src = "./imagen/coche-rojo.png"
        this.x = 90
        this.y = 520
        this.w = 40
        this.h = 60
       // this.direccionX = 1
       // this.direccionY = 1
        this.speed = 10

    }

    //metodos del carro 

    drawCars = () => {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)

    }

   movimientoCars = (event) => {
    if (( event.code === "ArrowLeft") && this.x > 0) {
        // aqui la izquierda
        this.x = this.x - this.speed;
      } else if (( event.code === "ArrowRight") && this.x + this.w < canvas.width) {
        // aqui la derecha
        this.x = this.x + this.speed;
      }
    }

    









    
     
}

