// seccion canvas
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// GLOBAL VARIABLES

const splashScreen = document.querySelector("#splash-screen");
const startBoton = document.querySelector("#start");
let game;
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const restartBoton = document.querySelector("#restart");
const gameScreen = document.querySelector("#game-screen");
const scoreDom = document.querySelector(".score");
const lifeDom = document.querySelector(".life");

scoreDom.innerHTML = 0;
const gameAudio = new Audio("./audio/bomberman-password.mp3");
gameAudio.volume = 0.1;
gameAudio.preload = "auto";
gameAudio.load();

// STATE MANAGEMENT FUNCIONES

const startGame = () => {
  splashScreen.style.display = "none";
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameScreen.style.display = "flex";
  scoreDom.innerHTML = 0;
  lifeDom.innerHTML = 2;

  gameAudio.load();
  gameAudio.play();
  gameAudio.loop = true;

  game = new Game(canvas.height);

  game.gameLoop();
};

//ADD EVENT LISTENERS

startBoton.addEventListener("click", startGame);
restartBoton.addEventListener("click", startGame);

//botones para manejar el carro
window.addEventListener("keydown", (event) => {
  game.cars.movimientoCars(event);
});
