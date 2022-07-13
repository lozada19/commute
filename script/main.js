// seccion canvas 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// GLOBAL VARIABLES 

const splashScreen = document.querySelector("#splash-screen")
const startBoton = document.querySelector("#start")
let game;
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const restartBoton = document.querySelector("#restart")
const gameScreen = document.querySelector("#game-screen")
const scoreDom = document.querySelector(".score")
//const pauseBoton = document.querySelector("#pause")
//let vias1; 





// STATE MANAGEMENT FUNCIONES 

const startGame = () => {
    splashScreen.style.display = "none"
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block"
    gameScreen.style.display = "block"
    scoreDom.innerText = 0
    


    game = new Game(canvas.height)
    playAudio()
   // console.log(game)
    game.gameLoop()

}

const playAudio = () => {
  game.gameAudio.play()
  game.playSonido = true
  
}

const stopAudio = () => {
  game.gameAudio.play()
  game.playSonido = false
}


/*const pauseGame = () => {
    if (game.isGamePaused === false) {
        game.isGamePaused = true
      } else {
        game.isGamePaused = false
        game.gameLoop()
      }
}*/







//ADD EVENT LISTENERS

startBoton.addEventListener("click", startGame);
restartBoton.addEventListener("click", startGame)
//pauseBoton.addEventListener("click", pauseGame)


//botones para manejar el carro 
window.addEventListener("keydown", (event) => {
    
    game.cars.movimientoCars(event)
  });



