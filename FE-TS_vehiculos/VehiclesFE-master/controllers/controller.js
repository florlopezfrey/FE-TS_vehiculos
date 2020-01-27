"use strict";
var mostraRtadoPaso1 = document.getElementById('mostraRtadoPaso1');
var tituloRtado = document.getElementById('tituloRtado');
var formPaso1 = document.getElementById('formPaso1');
var formPaso2 = document.getElementById('formPaso2');
var mostraRtadoPaso2 = document.getElementById('mostraRtadoPaso2');
var car;
function createCar() {
    var plate = document.getElementById('plate').value;
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    car = new Car(plate, color, brand);
    // acciones del paso 1
    mostraRtadoPaso1.innerHTML = "Plate: " + car.plate
        + "<br/>Brand: " + car.brand + "<br/>Color: " + car.color;
    tituloRtado.setAttribute("style", "visibility: visible;");
    ;
    formPaso1.setAttribute("style", "display:none;");
    formPaso2.setAttribute("style", "display:inline;");
}
function addWheels() {
    // ¿se puede juntar en 1?
    var marcaRueda1 = document.getElementById('marcaRueda1').value;
    var marcaRueda2 = document.getElementById('marcaRueda2').value;
    var marcaRueda3 = document.getElementById('marcaRueda3').value;
    var marcaRueda4 = document.getElementById('marcaRueda4').value;
    var todasLasMarcas = [marcaRueda1, marcaRueda2, marcaRueda3, marcaRueda4];
    var diamRueda1 = document.getElementById('diamRueda1').value;
    var diam1ValueNum = Number(diamRueda1); //esto convierte el input (que es siempre un string) en numero
    if (isNaN(diam1ValueNum)) { //validar si ha ingresado un numero o un NaN
        alert('Ingrese un diámetro válido');
        //return; //frena la funcion para que el usuario ingrese un diametro valido
    }
    todasLasMarcas.forEach(function () {
        var rueda1 = new Wheel(diam1ValueNum, marcaRueda1);
        car.addWheel(rueda1);
        return car;
    });
    //!!! esto está devolviendo siempre el valor de la priemra posicion
    // probar de hacer el foreach al reves, haciendo que car se ejecute siempre que sea menor o igual que el length de todasLasMarcas
    var nuevaPrueba = "";
    for (var i = 0; i < todasLasMarcas.length; i++) {
    }
    mostraRtadoPaso2.innerHTML = "RUEDA 1: <br/>Diametro: " + car.wheels[0].diameter
        + "<br/>Brand: " + car.wheels[0].brand + "brand2: " + car.wheels[1].brand;
}
