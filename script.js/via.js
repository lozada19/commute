class via {
    constructor (yParam,height) {
        this.image = new Image()
        this.image.src = "./imagen/background-1.png"
        this.speed = 3
        this.y = yParam
        this.h = height
        
    }

    drawVia = () => {
         ctx.drawImage(this.image, 0, this.y, canvas.width, canvas.height +6)
    }

    movimientoVia = () => {
        this.y = this.y + this.speed
        if( this.y >this.h ) {
             this.y = - this.h
        }
    }

    


}