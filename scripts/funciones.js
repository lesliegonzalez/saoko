console.log("Sesión JS02 funciones");

/**
 * Este es un ejemplo de una función declarada (function declaration, function statement).
 * Una característica de las funciones declaradas en que tienen hoisting (elevación).
 * 
 * Realiza la multiplicación de dos números
 * @param {Number} a multiplicando
 * @param {Number} b multiplicador
 * @returns Resultado de la multiplicación de a*b
 */
function multiplica(a, b){
    return a*b;
}

//++++++++++ Función declarada ++++++++++++++++
//Llamado de la función declarada
console.log("Multiplica 5 * 6 = " + multiplica(5,6));


//++++++++++ Función expresada +++++++++++++++++
/**
 * Las funciones expresadas (function expressions) son declaradas dentro de la asignación de una varibale.
 * Estas funciones pueden ser anónimas (no tener nombre). No tienen hoisting.
 */
/**
 * Sumatoria de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns Resultado de a+b
 */
 const suma = function(a, b) {return a+b;}

console.log("El resultadod de 56 + 4 = " + suma(56,4));

//++++++++++ Función autoinvocada +++++++++++++++++
/**
 * Las funciones autoinvocadas (self-inviking functions) pueden ser anónimas y se autoejecutan() en su declaración.
 */
(function (){
    console.log("===========");
    console.log("Hola");
    console.log("===========");
})();

//++++++++++ Función flecha +++++++++++++++++
/**
 * Las funciones flecha (arrow functions) funcionan similar a las funciones declaradas, pero no requieren la palabra "function" y si tienen una sola instrucción que será el retorno, no requieren la instrucción "return".
 */
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a, b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));

//++++++++++ Parámetros default +++++++++++++++++
/**
 * Función con parámetros inicializados
 */
function divide(a,b=1){
    return a/b;
}

console.log("La división de a/b = " + divide(4));

//++++++++++ Funciones recursivas +++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return(num* factorial(num-1));
}

console.log ("Factorial de 5= " + factorial(5));

//++++++++++ Rest  parameters +++++++++++++++++
//(parameters) => return ; SI ES UN DATO
// (parameters) => {     SI ES MÁS DE UN DATO
//    return data
//}
function sum(a, b, ...resto){
    let suma = a+b;
    resto.forEach(dato => {suma+= dato});
    return suma;
}

console.log("El resultado de sumar varios números es: " + sum(2,5,7,3));