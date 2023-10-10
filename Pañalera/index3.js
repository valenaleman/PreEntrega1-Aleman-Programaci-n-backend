class Prodcto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerInformacion(){
        return `Nombre ${this.nombre}, Precio ${this.precio}`;
    }

    static productos(){
        console.log("Hola usted selecciono la clase productos");
    }
}