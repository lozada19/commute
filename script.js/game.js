
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
        this.isGameOver = true
    }
 // metodos del juego 

 removeCoches = () => {
     console.log(this.cochesArr.length)
     if (this.cochesArr[0].y + this.cochesArr[0].w < 0){
         this.cochesArr.shift()
     }
 }
 
 gameOver = () => {
     this.isGameOver = false;
     canvas.style.display = "none"
     gameoverScreenDOM.style.display = "flex"


 }

 colicionCoches = () => {
     this.cochesArr.forEach((eachCoches) => {

        if (eachCoches.x < this.cars.x + this.cars.w &&
            eachCoches.x + eachCoches.w > this.cars.x &&
            eachCoches.y < this.cars.y + this.cars.h &&
            eachCoches.h + eachCoches.y > this.cars.y) {
                console.log("COLLISION")
                this.gameOver() 

            }
           
            
            
     })
 }

 automaticAddCoches = () => {
     if (this.cochesArr.length  < 1 || this.cochesArr[this.cochesArr.length -1].y > canvas.height / 2) {

        let randonPositionXLeft = Math.random() * (canvas.width - 150 &&   200)

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
     this.colicionCoches()

     
     this.cochesArr.forEach((eachCoches) => {
         eachCoches.movimientoCoches()
     })
    
     this.removeCoches()

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