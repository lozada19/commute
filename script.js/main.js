// seccion canvas 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// GLOBAL VARIABLES 

const splashScreen = document.querySelector("#splash-screen")
const startBoton = document.querySelector("#start")
let game;
const gameoverScreenDOM = document.querySelector("#gameover-screen")
const restartBoton = document.querySelector("#restart")
//let vias1; 





// STATE MANAGEMENT FUNCIONES 

const startGame = () => {
    splashScreen.style.display = "none"
    gameoverScreenDOM.style.display = "none";
    canvas.style.display = "block"

    game = new Game(canvas.height)
   // console.log(game)
    game.gameLoop()

}







//ADD EVENT LISTENERS

startBoton.addEventListener("click", startGame);
restartBoton.addEventListener("click", startGame)


//botones para manejar el carro 
window.addEventListener("keydown", (event) => {
    
    game.cars.movimientoCars(event)
  });



