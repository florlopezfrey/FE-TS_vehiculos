"use strict";
var rtadoPlate = document.getElementById('rtadoPlate');
var rtadoBrand = document.getElementById('rtadoBrand');
var rtadoColor = document.getElementById('rtadoColor');
var tituloRtado = document.getElementById('tituloRtado');
var formPaso1 = document.getElementById('formPaso1');
var formPaso2 = document.getElementById('formPaso2');
var rueda1 = document.getElementById('rueda1');
var rueda2 = document.getElementById('rueda2');
var rueda3 = document.getElementById('rueda3');
var rueda4 = document.getElementById('rueda4');
var car;
function createCar() {
    var plate = (document.getElementById('plate').value).toUpperCase();
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    car = new Car(plate, color, brand);
    var acumErroresCar = [];
    var regExPlate = /^[0-9]{4}[a-z]{3}$/gi;
    var plateOk = plate.match(regExPlate);
    if (plateOk == null) {
        acumErroresCar.push('- Ingrese un PLATE compuesto por 4 números y 3 letras');
    }
    if (car.plate == "" || car.brand == "" || car.color == "") {
        acumErroresCar.push('- Todos los campos son obligatorios');
    }
    else if (plateOk != null && car.brand != "" && car.color != "") { // {6,} es la cantidad de caracteres    
        // acciones del paso 1
        rtadoPlate.innerHTML = "Plate: " + car.plate;
        rtadoBrand.innerHTML = "Marca: " + car.brand;
        rtadoColor.innerHTML = "Color: " + car.color;
        tituloRtado.setAttribute("style", "visibility: visible;");
        ;
        formPaso1.setAttribute("style", "display:none;");
        formPaso2.setAttribute("style", "display:inline;");
        return;
    }
    alert(acumErroresCar.join('\n'));
}
function addWheels() {
    var acumErroresWheel = [];
    // Esta funcion convierte los diametros a numero y luego valida los datos
    for (var i = 0; i < 4; i++) {
        var diamValueNum = Number(document.getElementById('diamRueda' + (i + 1)).value); // convierte el input (que es siempre un string) en numero
        if (document.getElementById('marcaRueda' + (i + 1)).value == "") {
            acumErroresWheel.push('- Por favor complete la marca de la RUEDA ' + (i + 1));
        }
        if (isNaN(diamValueNum)) { //validar si ha ingresado un numero o un NaN
            acumErroresWheel.push('- El diámetro de RUEDA ' + (i + 1) + ' debe ser únicamente numérico');
        }
        else if (diamValueNum <= 0.4 || diamValueNum >= 2) {
            acumErroresWheel.push('- Ingrese un diámetro mayor que 0.4 y menor que 2 para RUEDA ' + (i + 1));
        }
    }
    if (acumErroresWheel && acumErroresWheel.length) {
        alert(acumErroresWheel.join('\n'));
        return;
    }
    else {
        // esta funcion suma las ruedas a Car
        for (var i = 0; i < 4; i++) {
            var diamOk = Number(document.getElementById('diamRueda' + (i + 1)).value);
            var marcaOk = document.getElementById('marcaRueda' + (i + 1)).value;
            var rueda = new Wheel(diamOk, marcaOk);
            car.addWheel(rueda);
        }
    }
    rueda1.innerHTML = "Marca: " + car.wheels[0].brand + "<br/>Diametro: " + car.wheels[0].diameter;
    rueda2.innerHTML = "Marca: " + car.wheels[1].brand + "<br/>Diametro: " + car.wheels[1].diameter;
    rueda3.innerHTML = "Marca: " + car.wheels[2].brand + "<br/>Diametro: " + car.wheels[2].diameter;
    rueda4.innerHTML = "Marca: " + car.wheels[3].brand + "<br/>Diametro: " + car.wheels[3].diameter;
}
