
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

    let nombre = prompt("Ingrese su nombrte");
    let edad = prompt("Ingrese su edad");
    let dni = prompt("Ingrese su DNI");
    let cantidadSolicitada = parseInt (prompt("Ingrese el monto que desea"));
    let cantidadCuotas = parseInt (prompt("Ingrese la cantidad de cuotas en las que puede pagar"));

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


function Filtrar (){

let ordenar = parseInt ( prompt("Filtrar por Precio o Nombre") );

if (ordenar = "precio"){

alert ("Elegiste por precio")

prestamosDados.sort(function(p1 , p2){

    if (p1.cantidadSolicitada < p2.cantidadSolicitada)
    return 1;

    else if (p1.cantidadSolicitada > p2.cantidadSolicitada){
        return -1;
    }else{
        return 0;
    }

})

console.log (prestamosDados)

} else if (ordenar = "nombre"){


    alert ("Elegiste por nombre")

prestamosDados.sort(function(p1 , p2){

    if (p1.nombre > p2.nombre)
    return 1;

    else if (p1.nombre < p2.nombre){
        return -1;
    }else{
        return 0;
    }

});

console.log (prestamosDados)

}

}

Filtrar ()
