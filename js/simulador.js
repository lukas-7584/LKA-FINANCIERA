
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
    let inTeres  = document.getElementById("INT"). value; 
    let interesApagar = document.getElementById("montoSolicitado").value * document.getElementById("INT").value; 
    let montoTotal = cantidadSolicitada + interesApagar;

    prestamosDados.push( new Prestamos (nombre , edad , dni , cantidadSolicitada , cantidadCuotas) );

    function valorCuota() {

        let totaldelaCuota = ( cantidadSolicitada * inTeres) + cantidadSolicitada / cantidadCuotas;
        totaldelaCuota

        let interesApagar = cantidadSolicitada * inTeres;
        interesApagar

    }

    valorCuota( )


        let contenedor = document.getElementById ("contenedor");

    contenedor.innerHTML = `<h2>Hola buenos días señor ${nombre} </h2>
                            <p>Para el  monto ${ "$" + cantidadSolicitada} el  valor con interes es ${ "$" + interesApagar}</p>
                            <p> el valor de las cuotas será de ${ "$" + totaldelaCuota} y el monto total es de ${montoTotal}</p>`

} 

