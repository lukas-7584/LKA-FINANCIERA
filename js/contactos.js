function validarConsulta () {

    let  nombre = document.getElementById ("nombre").value;
    let email  = document.getElementById("inputEmail4").value;
    let  telefono =   document.getElementById("telefono").value;
    let comoConocio =  document.getElementById("redesSociales").value;
    let consulta  =  document.getElementById("consulta").value;

    if (nombre || email || telefono || comoConocio || consulta != "") {
        alert("En breve nos estaremos comunicando con usted, muchas gracias por elegirnos")
    }

    

}