
class Game {
    constructor () {
        // propiedades
        // el carro
        // velosidad 
        //imagen de fondo 
        this.bg = new Image()
        this.bg.src = "./imagen/background-1.png"
        this.cars = new Cars()
        this.

        

    }
 // metodos del juego 

 gameLoop = () => {
    
     console.log("funciona")
     // 1. limpiar el canvas 
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     // 2. movimientos y acciones de los elemetos 
    

     // 3. dibujar los elemtos 
     ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
     this.cars.drawCars()


     //  4. efecto de recursion

     requestAnimationFrame(this.gameLoop)



 }
 
 // carros aleatoros 
 // colicion carro a carro
 // efecto de gameover 

}