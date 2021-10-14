
let  nombre = prompt("ingrese su nombre");
let email  = prompt("ingrese su email");
let  telefono =  parseInt( prompt("ingrese su número de telefono") );
let comoConocio = prompt("ingrese como nos conocio facebook , twitter , instagram");
let consulta  = prompt("ingrese su consulta");

if (nombre || email || telefono != "") {
    console.log ("Debe ingresar los datos de contacto")
}
else{
console.log("En breve nos estaremos comunicando con usted, muchas gracias por elegirnos")
}