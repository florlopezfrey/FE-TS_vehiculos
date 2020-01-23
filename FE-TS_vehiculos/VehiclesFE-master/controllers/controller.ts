var mostraRtadoPaso1 = <HTMLElement>document.getElementById('mostraRtadoPaso1');
var tituloRtado = <HTMLElement>document.getElementById('tituloRtado');
var formPaso1 = <HTMLElement>document.getElementById('formPaso1');
var formPaso2 = <HTMLElement>document.getElementById('formPaso2');

function createCar(plate:string,brand:string,color:string){
    let car = new Car(plate,color,brand);
    
    car.addWheel(new Wheel(2,"SEAT")); //el original del parentesis era  2,"SEAT"
    
    // acciones del paso 1
    mostraRtadoPaso1.innerHTML = "Plate: " + car.plate 
    + "<br/>Brand: " +car.brand + "<br/>Color: " + car.color 
    + "<br/>Wheels: " + JSON.stringify(car.wheels) + "</p>";
    tituloRtado.setAttribute("style", "visibility: visible;");;
    formPaso1.setAttribute("style", "display:none;");
    formPaso2.setAttribute("style", "display:inline;");
 
}

