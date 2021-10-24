
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
    let cantidadSolicitada =  parseInt( document.getElementById("montoSolicitado").value);
    let cantidadCuotas =  parseInt( document.getElementById("cuotasnumero").value);    
    let inTeres  = parseInt(  document.getElementById("INT"). value); 
    let interesApagar = parseInt( document.getElementById("montoSolicitado").value )* parseInt( document.getElementById("INT").value); 
    let montoTotal = parseInt (document.getElementById("montoSolicitado").value) + parseInt( document.getElementById("montoSolicitado").value * document.getElementById("INT").value)
    let totaldelaCuota = parseInt (montoTotal) / parseInt( document.getElementById("cuotasnumero").value);


    prestamosDados.push( new Prestamos (nombre , edad , dni , cantidadSolicitada , cantidadCuotas) );

    function valorCuota() {

        let interesApagar = cantidadSolicitada * inTeres;
        interesApagar


        let totaldelaCuota = montoTotal / cantidadCuotas;
        totaldelaCuota

        
    }

    valorCuota( )


        let contenedor = document.getElementById ("contenedor");

    contenedor.innerHTML = `<h2>Hola buenos días señor ${nombre} </h2>
                            <p>Para el  monto ${ "$" + cantidadSolicitada} el interes es ${ "$" + interesApagar}</p>
                            <p> El valor de las cuotas será de ${ "$" + totaldelaCuota} y el monto total es de ${ "$" + montoTotal}</p>`

} 

