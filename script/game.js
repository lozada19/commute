class Game {
  constructor(heightParam) {
    this.bg = new Image();
    this.bg.src = "./imagen/background-1.png";
    this.cars = new Cars();
    this.cochesArr = [];
    this.muroArr = [];
    this.isGameOn = true;
    this.viaArr = [];
    this.viaArr.push(
      new via(0, heightParam),
      new via(-heightParam, heightParam)
    );
  }
  // metodos del juego

  removeCoches = () => {
    console.log(this.cochesArr.length);
    if (this.cochesArr[0].y > canvas.height) {
      this.cochesArr.shift();
      scoreDom.innerHTML = Number(scoreDom.innerHTML) + 10;
    }
  };

  gameOver = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    gameoverScreenDOM.style.display = "flex";
    gameScreen.style.display = "none";
    gameAudio.pause();
  };

  colicionCoches = () => {
    this.cochesArr.forEach((eachCoches, indice) => {
      if (
        eachCoches.x < this.cars.x + this.cars.w &&
        eachCoches.x + eachCoches.w > this.cars.x &&
        eachCoches.y < this.cars.y + this.cars.h &&
        eachCoches.h + eachCoches.y > this.cars.y
      ) {
        console.log("COLLISION");

        //quitar vidas
        //si la vida es mayor a 0 se le resta
        // si la vidad es igual a 0 gameOver

        if (this.cars.vidas > 0) {
          this.cars.vidas = this.cars.vidas - 1;
          lifeDom.innerHTML = Number(lifeDom.innerHTML) - 1;
        } else if (this.cars.vidas === 0) {
          this.gameOver();
        }

        // indice cantidad posicion a eliminar
        this.cochesArr.splice(indice, 1);
      }
    });
  };

  automaticAddCoches = () => {
    if (
      this.cochesArr.length < 1 ||
      this.cochesArr[this.cochesArr.length - 1].y > canvas.height * 0.5
    ) {
      let randonPositionXLeft = Math.random() * (canvas.width - 150 && 200);

      let newcochesLeft = new Coches(
        randonPositionXLeft,
        "./imagen/coche-verde.png"
      );
      this.cochesArr.push(newcochesLeft);
    }
  };

  gameLoop = () => {
    console.log("funciona");
    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. movimientos y acciones de los elemetos
    this.automaticAddCoches();
    this.colicionCoches();
    this.cochesArr.forEach((eachCoches) => {
      eachCoches.movimientoCoches();
    });
    this.removeCoches();

    this.viaArr.forEach((eachVias) => {
      eachVias.movimientoVia();
    });

    // 3. dibujar los elemtos

    this.viaArr.forEach((eachVias) => {
      eachVias.drawVia();
    });

    this.cars.drawCars();

    this.cochesArr.forEach((eachCoches) => {
      eachCoches.drawCoches();
    });

    //  4. efecto de recursion

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
