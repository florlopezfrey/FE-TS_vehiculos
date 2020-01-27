"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel); // esta línea mete la class Wheel dentro de la variable wheels
    };
    return Car;
}());
