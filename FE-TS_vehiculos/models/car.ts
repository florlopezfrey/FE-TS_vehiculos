class Car { //al momento de crear un Car, tengo que tener en cuenta los parametros del contructor, no asi los atributos del objeto
    plate: string;
    color: string;
    brand: string;
    wheels: Wheel[] = new Array();

    constructor(plate: string, color: string, brand: string) {
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }

    addWheel(wheel: Wheel): void {
        this.wheels.push(wheel); // esta línea mete la class Wheel dentro de la variable wheels
    }
}
