"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASES (definen los objetos)
var User = /** @class */ (function () {
    function User(name, mail, age) {
        this.nombre = name;
        this.email = mail;
        this.edad = age;
    }
    User.prototype.register = function () {
        console.log("$(this.nombre) esta registrado"); //el this hace referencia a esta clase
    };
    User.prototype.showAge = function () {
        return this.edad;
    };
    User.prototype.edadEnAnos = function () {
        return this.edad + " años";
    };
    User.prototype.payInvoice = function () {
        console.log(this.nombre + " ha pagado el invoice");
    };
    return User;
}());
var florencia = new User("Flor", "aa@aa.com", 34); // el new crea un nuevo User, pasando el parámetro `Flor`, que el constructor tiene la orden de interpretarlo como name
console.log(florencia);
document.write(florencia.email);
console.log(florencia.edadEnAnos());
var Miembros = /** @class */ (function (_super) {
    __extends(Miembros, _super);
    function Miembros(id, nombre, email, edad) {
        var _this = _super.call(this, nombre, email, edad) || this;
        _this.id = id;
        return _this;
    }
    Miembros.prototype.payInvoiceMember = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Miembros;
}(User));
var juan = new Miembros(1, "Juan", "juan@mail.com", 33);
juan.payInvoice();
