
// CLASES (definen los objetos)
class User {
    private nombre: string; // private es un modificador similar a protected
    public email: string;  // public es un modificador que indica que se puede acceder a él desde fuera de la clase
    protected edad: number; // protected es otro modificador que solo es accesible a clases heredadas de User

    constructor(name:string, mail:string, age:number) { //constructor es un método que se ejecuta apenas creo la clase (más abajo generé un nuevo User con los parámetros)
        this.nombre = name;
        this.email = mail;
        this.edad = age;
    }

    register() {    // es un ej, por si hubiera un registro 
        console.log(`$(this.nombre) esta registrado`);    //el this hace referencia a esta clase
    }

    showAge() {
        return this.edad;
    }

    public edadEnAnos (){
        return this.edad + " años";
    }

    payInvoice() {
        console.log(`${this.nombre} ha pagado el invoice`);
    }
}

var florencia = new User(`Flor`, `aa@aa.com`, 34); // el new crea un nuevo User, pasando el parámetro `Flor`, que el constructor tiene la orden de interpretarlo como name

console.log(florencia);

document.write(florencia.email);
console.log(florencia.edadEnAnos());


class Miembros extends User {   // el extends hace que Miembros sea un heredero de User y puedo usar su código
    id: number;

    constructor(id:number, nombre:string, email:string, edad:number) {
        super(nombre, email, edad);
        this.id = id;
    }

    payInvoiceMember() {
        super.payInvoice();
    }
}

var juan = new Miembros(1, `Juan`, `juan@mail.com`, 33);
juan.payInvoice();