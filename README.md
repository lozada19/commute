
# Commute

## Description

 Commute es un juego en 2D en el que el jugador tiene que mover el coche de izquierda a derecha para esquivar los coches que vienen de la parte superior hasta el inferior. El juego termina cuando colicionas mas de dos veces con los coches y mientras esquivas mas coches ganas mas puntos 


## MVP (DOM - CANVAS)

- Un carro que esquiva obtaculos 
- Ganas puntos al equivar
- Pierde vida al colicionar


## Data Structure

# main.js

- starGame()

# game.js

- game()
- removeCoches(){}
- gameOver(){}
- colicionMuro(){}
- colicionCoches(){}
- automaticAddCoches(){}
- gameLoop(){}

# cars.js

- Cars () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
    this.vidas;
}
- drawCars(){}
- movimientosCars(){}

# coches.js

- Coches (){
    this.image;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawCoches(){}
- movimientoCoches(){}


# vias.js

- Vias () {
    this.image;
    this.speed
    this.y;
    this.h
}
- drawVias(){} 
- movimientoVias(){}

## States y States Transitions

- splashScreen
- gameScreen
- gameOverScreen













