class via {
    constructor () {
        this.image = new Image()
        this.image.src = "./imagen/background-1.png"
        this.posicion = 0 
        this.speed = 3
        this.y = 0
        
    }

    drawVia = () => {
         ctx.drawImage(this.image, 0, this.y, canvas.width, canvas.height)
    }

    movimientoVia = () => {
        this.y = this.y + this.posicion + this.speed
    }

    


}