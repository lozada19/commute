
class Game {
    constructor (heightParam) {
        // propiedades
        // el carro
        // velosidad 
        //imagen de fondo 
        this.bg = new Image()
        this.bg.src = "./imagen/background-1.png"
        this.cars = new Cars()
        this.cochesArr = []
        this.muroArr = []
        this.isGameOn = true
        this.viaArr = []
        this.viaArr.push(new via(0,heightParam),new via( - heightParam, heightParam))
        this.score = 0
        this.gameAudio = new Audio ("./audio/bomberman-password.mp3")
    }
 // metodos del juego 


updataScore = () => {
     for(let i = 0; i < this.cochesArr.length; i++){
         //cada vez que un coche salga del canvas
        // si el coche sale del canvas
        if ( this.cochesArr[i].y  > canvas.height + this.cochesArr[i].h){

            console.log("sale del canvas")
             this.score ++
             scoreDom.innerText = this.score
             
         } 
     } 
     
    }

 removeCoches = () => {
     console.log(this.cochesArr.length)
     if (this.cochesArr[0].y + this.cochesArr[0].w < 0){
         this.cochesArr.shift()
     }
 }
 
 gameOver = () => {
     this.isGameOn = false;
     canvas.style.display = "none"
     gameoverScreenDOM.style.display = "flex"
     gameScreen.style.display = "none"
  


 }

 colicionMuro = () => {
     if(this.cars.x + this.cars.w >= canvas.width - 30){
         this.gameOver()
         console.log("muro")
     }else if (this.cars.x <= 30){
       //  console.log("muro")
         this.gameOver()
     }
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
     if (this.cochesArr.length  < 1 || this.cochesArr[this.cochesArr.length -1].y > canvas.height * 0.4) {

        let randonPositionXLeft = Math.random() * (canvas.width - 150 &&   200)

        let newcochesLeft = new Coches(randonPositionXLeft, "./imagen/coche-verde.png")
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
    this.updataScore()
     //this.via.movimientoVia()

     this.viaArr.forEach((eachVias) =>{
         eachVias.movimientoVia()
     })

     this.colicionMuro()


     // 3. dibujar los elemtos 

     this.viaArr.forEach((eachVias) =>{
        eachVias.drawVia()
    })

     this.cars.drawCars()
     
     this.cochesArr.forEach((eachCoches) => {
      eachCoches.drawCoches()
     })

     
     //  4. efecto de recursion

     
     if (this.isGameOn === true){
        requestAnimationFrame(this.gameLoop)
     } 



 }
 
 // carros aleatoros 
 // colicion carro a carro
 // efecto de gameover 

 }