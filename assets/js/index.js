//donde [0 piedra, 1 papel, 2 tijera]
const opciones = [0 , 1 , 2]
var jugador2

function elementoAleatorio(min, max){
  var numero = Math.floor(Math.random() * (max - min +1) + min);
  return numero;
}

function usuario(jugador1){
    jugador1 = parseInt(jugador1)
    jugador2 = elementoAleatorio(0,2)

if (jugador1 == 0){
  if(opciones[jugador2] == 0){
    document.getElementById('resultado').innerHTML = `<h1>Empate!</h1>`
  }
  else{
    if (opciones[jugador2] == 1){
      document.getElementById('resultado').innerHTML = `<h1>Ganó la computadora alv!</h1>`
    }
    else {
      if (opciones[jugador2] == 2){
        document.getElementById('resultado').innerHTML = `<h1>Tu ganastes!</h1>`
      }
    }
  }
}


if (jugador1 == 1){
  if(opciones[jugador2] == 0){
    document.getElementById('resultado').innerHTML = `<h1>Tu ganastes!</h1>`
  }
  else{
    if (opciones[jugador2] == 1){
      document.getElementById('resultado').innerHTML = `<h1>Empate!</h1>`
    }
    else {
      if (opciones[jugador2] == 2){
        document.getElementById('resultado').innerHTML = `<h1>Ganó la computadora alv!</h1>`
      }
    }
  }
}

if (jugador1 == 2){
  if(opciones[jugador2] == 0){
    document.getElementById('resultado').innerHTML = `<h1>Ganó la computadora alv!</h1>`
  }
  else{
    if (opciones[jugador2] == 1){
      document.getElementById('resultado').innerHTML = `<h1>Tu ganastes!</h1>`
    }
    else {
      if (opciones[jugador2] == 2){
        document.getElementById('resultado').innerHTML = `<h1>Empate!</h1>`
      }
    }
  }
}

  document.getElementById('resultado').style.display = "";
}

function quitarEfecto() {
  document.getElementById('resultado').style.display = "none";
}
