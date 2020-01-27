"use strict";
var mostraRtadoPaso1 = document.getElementById('mostraRtadoPaso1');
var tituloRtado = document.getElementById('tituloRtado');
var formPaso1 = document.getElementById('formPaso1');
var formPaso2 = document.getElementById('formPaso2');
var mostraRtadoPaso2A = document.getElementById('mostraRtadoPaso2A');
var mostraRtadoPaso2B = document.getElementById('mostraRtadoPaso2B');
var car;
function createCar() {
    var plate = document.getElementById('plate').value;
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    car = new Car(plate, color, brand);
    // const regex : RegExp = /abc| ... |123/gi;
    // console.log(regex.test(123));
    if (plate.match(/^[a-z]{3}[0-9]{3}$/gi)) { // {6,} es la cantidad de caracteres    
        // acciones del paso 1
        mostraRtadoPaso1.innerHTML = "Plate: " + car.plate
            + "<br/>Brand: " + car.brand + "<br/>Color: " + car.color;
        tituloRtado.setAttribute("style", "visibility: visible;");
        ;
        formPaso1.setAttribute("style", "display:none;");
        formPaso2.setAttribute("style", "display:inline;");
    }
    else {
        alert('Por favor ingrese un PLATE compuesto de 3 letras y 3 números');
        return;
    }
}
function addWheels() {
    // ¿se puede juntar en 1?
    var marcaRueda1 = document.getElementById('marcaRueda1').value;
    var marcaRueda2 = document.getElementById('marcaRueda2').value;
    var marcaRueda3 = document.getElementById('marcaRueda3').value;
    var marcaRueda4 = document.getElementById('marcaRueda4').value;
    var todasLasMarcas = [marcaRueda1, marcaRueda2, marcaRueda3, marcaRueda4];
    var diamRueda1 = document.getElementById('diamRueda1').value;
    var diamRueda2 = document.getElementById('diamRueda2').value;
    var diamRueda3 = document.getElementById('diamRueda3').value;
    var diamRueda4 = document.getElementById('diamRueda4').value;
    var todosLosDiametrosOr = [diamRueda1, diamRueda2, diamRueda3, diamRueda4];
    var todosLosDiametrosNum = []; //array vacio que recibirá los valores de diametro como numero
    // Esta funcion convierte los diametros a numero y luego valida los datos
    for (var i = 0; i < 4; i++) {
        var diamValueNum = Number(todosLosDiametrosOr[i]); // convierte el input (que es siempre un string) en numero
        if (isNaN(diamValueNum)) { //validar si ha ingresado un numero o un NaN
            alert('El diámetro de RUEDA ' + (i + 1) + ' debe ser únicamente numérico');
            return; //frena la funcion para que el usuario ingrese un diametro valido
        }
        else if (diamValueNum < 0.4 || diamValueNum > 2) {
            alert('Ingrese un diámetro entre 0.4 y 2 para RUEDA ' + (i + 1));
            return;
        }
        else {
            todosLosDiametrosNum.push(diamValueNum);
        }
    }
    // esta funcion suma las ruedas a Car
    for (var i = 0; i < 4; i++) {
        var rueda = new Wheel(todosLosDiametrosNum[i], todasLasMarcas[i]);
        car.addWheel(rueda);
    }
    mostraRtadoPaso2A.innerHTML = "RUEDA 1: <br/>Diametro: " + car.wheels[0].diameter
        + "<br/>Brand: " + car.wheels[0].brand + "<br/><br/>RUEDA 3: <br/>Diametro: " + car.wheels[2].diameter
        + "<br/>Brand: " + car.wheels[2].brand;
    mostraRtadoPaso2B.innerHTML = "RUEDA 2: <br/>Diametro: " + car.wheels[1].diameter
        + "<br/>Brand: " + car.wheels[1].brand + "<br/><br/>RUEDA 4: <br/>Diametro: " + car.wheels[3].diameter
        + "<br/>Brand: " + car.wheels[3].brand;
}
