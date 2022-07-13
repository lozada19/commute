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

scoreDom.innerHTML = 0
const gameAudio = new Audio ("./audio/bomberman-password.mp3") 
gameAudio.volume = 0.1;
gameAudio.preload = "auto";
gameAudio.load(); 
//const pauseBoton = document.querySelector("#pause")
//let vias1; 





// STATE MANAGEMENT FUNCIONES 

const startGame = () => {
    splashScreen.style.display = "none"
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block"
    gameScreen.style.display = "block"
    scoreDom.innerHTML = 0

    gameAudio.load()
    gameAudio.play()
    gameAudio.loop = true;
    


    game = new Game(canvas.height)
   
   // console.log(game)
    game.gameLoop()


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



