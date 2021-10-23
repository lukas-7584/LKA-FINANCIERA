
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
function procesar(){

let prestamosDados = [];

    let nombre = document.getElementById("nomYape").value;
    let edad = document.getElementById("eDad").value;
    let dni = document.getElementById("ingDni").value;
    let cantidadSolicitada = document.getElementById("montoSolicitado").value;
    let cantidadCuotas = document.getElementById("cuotasnumero").value;
    let totaldelaCuota = document.getElementById("montoSolicitado").value / document.getElementById("cuotasnumero").value;

    prestamosDados.push( new Prestamos (nombre , edad , dni , cantidadSolicitada , cantidadCuotas) );

    function valorCuota() {

        let totaldelaCuota =  cantidadSolicitada / cantidadCuotas;
        totaldelaCuota

    }

    valorCuota( )


    for(let clientes of prestamosDados){

    console.log("El nombre del clientes es: " + clientes.nombre);
    console.log("Su edad es: " + clientes.edad);
    console.log("Y su  DNI es: " + clientes.dni);
    console.log("Desea sacar la cantidad de "  + "pesos  " + clientes.cantidadSolicitada);
    console.log("EN  "  + "cuotas  "  + clientes.cantidadCuotas);
    console.log("El valor de la  "  + "cuotas  será $  "  + totaldelaCuota);


    let contenedor = document.getElementById ("contenedor");
    contenedor.innerHTML = `<h2>Hola buenos días </h2>
                            <p> Señor  ${nombre}</p>
                            <p> Para el  monto ${ "$" + cantidadSolicitada}</p>
                            <p> el  valor de la  cuota ${totaldelaCuota}</p>`

} 

console.log(prestamosDados);
}

