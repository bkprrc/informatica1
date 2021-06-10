// Mi primera practica con JavaScript
// Este es un comentario
/* Y este un comentario
Multilinea*/ 
// asi se hacen los comentarios en JavaScript
// Autor: Sara Alexandra Corrales Cañon
//const nombre = 'Sara Alexandra';
//var tipo_doc = '123456';
//let edad = '15';
//console.log ('Hola '+nombre+'. Tu numero de documento es:'+tipo_doc+'.tienes'+edad);

//let otro= '20';
//let comparacion = edad===anyos;
//console.log (comparacion);
//console.log (edad+otro);
//console.log (otro>=edad);

// 10/12/2005

//let numero = 0;
//numero = numero + 1;
//console.log(numero);
//numero = numero + 0;
//console.log(numero);
//numero = numero + 1;
//console.log(numero);
//numero = numero + 2;
//console.log(numero);
//numero = numero + 2;
//console.log(numero);
//numero = numero + 0;
//console.log(numero);
//numero = numero + 0;
//console.log(numero);
//numero = numero + 5;
//console.log(numero);

//operaciones con JavaScript
//adicion 
//let adicion = 2 + 2;
//sustraccion 
//let sustraccion = 3 - 2;
//multiplicacion 
//let producto = 4 * 5;
//division 
//let division = 6 / 3;
//console.log (adision, sustraccion, multiplicacion, prodcuto, divicion);
 // operadores para tener en cuentaademas de los que sigen del let
 //modulo 
 //let modulo = 9/4;
 //let modulo2 = 9/3;
 //console.log (modulo, modulo2);
// existen poreadores logicos en JavaScript.
// Y = && conjuncion
//O = !! disyuncion
//&&
//true && true = true
//true && false = false
//false && true = false
//false = false = false 
//!!
//true && true = true
//true && false = true
//false && true = true 
//false = false = false 
let condicion = 5;
let condicon2 = 4;
if (condicion>condicion2) {
    console.log('Hola Mundo');
}
//crear un progarma que decida que operaciones hacer entre 2 numero 
alert('HOLA OPERADOR');
let nota = prompt('ESCRIBE UN NUMERO DE PREFERENCIA: ');
let notas = parseInt(nota);
console.log (nota*3);
alert('CONTINUAR');
 let dato1 = prompt('INGRESE OTRO NUMERO');
 dato1 = parseInt(dato1);
 let dato2 = prompt('INGRESE OTRO NUMERO');
 dato2 = parseInt(dato2);
 let operacion = prompt('¿QUE OPERACION DECEAS REALIZAR? (adicion, sustracion, multiplicacion, division)');

    if (operacion == 'adicion') {
    resultado = dato1+dato2;
}
else {
    if (operacion == 'sustracion') {
    resultado = dato1-dato2;
}
else {
    if (operacion == 'multiplicacion') {
    resultado = dato1*dato2;
}
else {
    if (operacion == 'division') {
    resultado = dato1/dato2;
}
}
}
}

alert(resultado);
alert('GRACIAS POR SU PARTICIPACION');