
//EJEMPLO MOSTRANDOO  CLASES , OBJETOS Y ARREGLOS------


class Prestamos{
    constructor(nombre , edad , dni , cantidadSolicitada , cantidadCuotas){

        this.nombre = nombre;
        this.edad = edad,
        this.dni = dni;
        this.cantidadSolicitada = cantidadSolicitada;
        this.cantidadCuotas = cantidadCuotas;

    }
}


let prestamosDados = [];

for (let i = 0 ; i < 3 ; i++){

    let nombre = document.getElementById("nomYape").value;
    let edad = document.getElementById("eDad").value;
    let dni = document.getElementById("ingDni").value;
    let cantidadSolicitada = document.getElementById("montoSolicitado").value;
    let cantidadCuotas = document.getElementById("cuotasnumero").value;

    prestamosDados.push( new Prestamos (nombre , edad , dni , cantidadSolicitada , cantidadCuotas ) );

}

console.log (prestamosDados);



for (let clientes of prestamosDados){

    console.log("Hola soy el alumno/a: " + clientes.nombre);
    console.log("Mi edad es: " + clientes.edad);
    console.log("Mi DNI es: " + clientes.dni);
    console.log("Deseo sacar la cantidad de "  + "pesos  " + clientes.cantidadSolicitada);
    console.log("EN  "  + "cuotas  "  + clientes.cantidadCuotas);

} 



