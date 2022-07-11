
class Game {
    constructor () {
        // propiedades
        // el carro
        // velosidad 
        //imagen de fondo 
        this.bg = new Image()
        this.bg.src = "./imagen/background-1.png"
        this.cars = new Cars()
        this.cochesArr = []
    }
 // metodos del juego 

 automaticAddCoches = () => {
     if (this.cochesArr.length === 0 || this.cochesArr[this.cochesArr.length -1].y < canvas.height / 2) {

        let randonPositionXLeft = Math.random() * 100

        let newcochesLeft = new Coches(randonPositionXLeft, "/imagen/coche-verde.png")
        this.cochesArr.push(newcochesLeft)

        //let distanceCoches = newcochesLeft.w + 30
        //let randonPositionXRigth = randonPositionXRigth + distanceCoches

        //let newCochesRigth = new Coches(randonPositionXRigth, "/imagen/coche-verde.png")
       // this.cochesArr.push(newCochesRigth)
     }
 }

 gameLoop = () => {
    
     console.log("funciona")
     // 1. limpiar el canvas 
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     // 2. movimientos y acciones de los elemetos 
     this.automaticAddCoches()
     
     this.cochesArr.forEach((eachCoches) => {
         eachCoches.movimientoCoches()
     })
    

     // 3. dibujar los elemtos 
     ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
     this.cars.drawCars()
     this.cochesArr.forEach((eachCoches) => {
      eachCoches.drawCoches()
     })



     //  4. efecto de recursion

     requestAnimationFrame(this.gameLoop)



 }
 
 // carros aleatoros 
 // colicion carro a carro
 // efecto de gameover 

}