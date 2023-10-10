function mostrarProductos (productos) {
    if(productos.length === 0) {
        console.log("Sin productos");
    } else {
        productos.forEach((element, indice) => {
            console.log(`${indice + 1}: ${element}`);
        });
    }
    console.log(`La lista de productos es ${productos.length}`)
}

const sinProductos = [];
const conProductos = ["Babysec - Ultrasec", "Pampers - Premium care, piel delicada", "Pampers - Premium care, recién nacido hipoalergénico"];

mostrarProductos(sinProductos);
mostrarProductos(conProductos);