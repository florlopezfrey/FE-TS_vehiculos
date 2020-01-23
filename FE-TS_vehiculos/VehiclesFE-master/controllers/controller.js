"use strict";
var mostraRtadoPaso1 = document.getElementById('mostraRtadoPaso1');
var tituloRtado = document.getElementById('tituloRtado');
var formPaso1 = document.getElementById('formPaso1');
var formPaso2 = document.getElementById('formPaso2');
function createCar(plate, brand, color) {
    var car = new Car(plate, color, brand);
    car.addWheel(new Wheel(2, "SEAT")); //el original del parentesis era  2,"SEAT"
    // acciones del paso 1
    mostraRtadoPaso1.innerHTML = "Plate: " + car.plate
        + "<br/>Brand: " + car.brand + "<br/>Color: " + car.color
        + "<br/>Wheels: " + JSON.stringify(car.wheels) + "</p>";
    tituloRtado.setAttribute("style", "visibility: visible;");
    ;
    formPaso1.setAttribute("style", "display:none;");
    formPaso2.setAttribute("style", "display:inline;");
}
