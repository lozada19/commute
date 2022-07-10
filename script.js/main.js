// seccion canvas 
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// GLOBAL VARIABLES 

const splashScreen = document.querySelector("#splash-screen")
const startBoton = document.querySelector("#start")







// STATE MANAGEMENT FUNCIONES 

const startGame = () => {
    splashScreen.style.display = "none"
    canvas.style.display = "block"

    const game = new Game()
    console.log(game)
    game.gameLoop()
}







//ADD EVENT LISTENERS

startBoton.addEventListener("click", startGame)

//botones para manejar el carro 



