console.log("Sesión JS05 Operadores");

//----------- Operadores aritméticos ----------
/**
 * + - / * % **
 */

let suma = 3 + 4;
console.log("El valor de suma: " + suma);

//----------Operadores de asignación ---------
let numero; 
numero = 10;
numero += 10;
numero -= 5;
console.log("El valor de número es: " + (numero+=3));
numero *= 2;
numero /= 3;
numero %= 2;
numero **= 2;

console.log("Valor del número:" + numero++);
console.log("Valor del número:" + ++numero);

//----------Operadores lógicos ---------

let valorB = true && true;
valorB = true && true || false && true;

console.log("Valor booleano" + valorB);
