
class Prestamos{
    constructor(nombre , edad , dni , cantidadSolicitada , cantidadCuotas){

        this.nombre = nombre;
        this.edad = edad,
        this.dni = dni;
        this.cantidadSolicitada = cantidadSolicitada;
        this.cantidadCuotas = cantidadCuotas;

    }
}
function procesar(e){

    e.preventDefault();

let prestamosDados = [];

    let nombre = document.getElementById("nomYape").value;
    let edad = document.getElementById("eDad").value;
    let dni = document.getElementById("ingDni").value;
    let cantidadSolicitada =  parseInt( document.getElementById("montoSolicitado").value);
    let cantidadCuotas =  parseInt( document.getElementById("cuotasnumero").value);    
    let inTeres  = parseInt(  document.getElementById("INT"). value); 
    let interesApagar = parseInt( document.getElementById("montoSolicitado").value ) * parseInt( document.getElementById("INT").value) / 100; 
    let montoTotal = parseInt (document.getElementById("montoSolicitado").value) + parseInt( (montoSolicitado.value * document.getElementById("INT").value / 100) )
    let totaldelaCuota = parseInt (montoTotal) / parseInt( document.getElementById("cuotasnumero").value);

    prestamosDados.push( new Prestamos (nombre , edad , dni , cantidadSolicitada , cantidadCuotas) );
    console.log (prestamosDados);

    let  guardarLocal = (clave,valor) => {localStorage.setItem (clave,valor)};
    guardarLocal("Lista de Clientes", JSON.stringify(prestamosDados));


    function valorCuota(e) {

        let interesApagar = cantidadSolicitada * inTeres ;
        interesApagar


        let totaldelaCuota = montoTotal / cantidadCuotas;
        totaldelaCuota

        
    }

    valorCuota( )


        let contenedor = document.getElementById ("contenedor");


        for (clientes  of prestamosDados) {
                            
            contenedor.innerHTML = 
                                    `<h2>Hola buenos días señor ${nombre} con DNI ${dni} y con ${ edad} años </h2>
                                    <p>Para el  monto ${ "$" + cantidadSolicitada} el interes es ${ "$" + interesApagar}</p>
                                    <p> La cantidaad de cuotas seran ${cantidadCuotas}</p>
                                    <p> El valor de las cuotas será de ${ "$" + totaldelaCuota} y el monto total es de ${ "$" + montoTotal}</p>`;
            
            }
        

} 

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click" , procesar);



