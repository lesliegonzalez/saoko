console.log("Sesión J04 ciclos")

/* const myArray = [1,2,3,4,34,"bye", "Holi crayoli 3"];
myArray[myArray.length] = 7; //Otra forma de agregar al final
myArray.push(23); //Se agrega al final

myArray[3] = "Hola" //Se reemplaza el número 4


function reemplazar(myArray) {
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] === "Hola") myArray[index] = "Leslie";
    }
    return myArray;
}

console.log(reemplazar(myArray));

function reemplazar2(myArray) {
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] === 2) myArray[index] = "You";
    }
    return myArray;
}
console.log(reemplazar2(myArray));


function reemplazarR(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace);
    myArray[index] = newString
    return myArray;
}
console.log(reemplazarR(myArray, 34, "Rafa"));

function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray); */

//----------------------------------------------------------------
/**
 * FIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E3   E2  E1
 * LIFO: 
 *       E3   E2  E1 --->  [ arreglo  ] --->  E1   E2  E3
 */


//FIFO
 console.log("--------- FIFO -------")
       //    1        2       3
const perecederos = ["manzanas", "quesos","fresas"];

//Agregamos un elemento al final del arreglo:
perecederos.push("leche"); // será mi 4o elemento 
console.log(perecederos);
//Sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: "+ perecederos.shift() )
console.log(perecederos);

//LIFO
console.log("--------LIFO------");
const tienda = [...perecederos]; //Se clona el arreglo const tienda = perecederos.slice();
console.log(tienda);
//Agregamos un elemento al final del arreglo:
tienda.push("El amor"); //Será mi 4o elemento
console.log(tienda);
//Sacamos el último elemento en entrar
console.log("El elemento eliminado "+ tienda.pop());
console.log(tienda);

//----------------------------------------------
const arrayNumbers = [1, 2, 3, 4, 5];
   let total = []

   function duplicar (array1){
     for (let i=0; i<array1.length; i++){
        array1[i] *= 2;
     }
       return array1;
   }

   const duplicated = arrayNumbers.map(num => num * 2); //Es la abstracción de las instrucciones de las líneas 78 - 85
console.log(duplicar (arrayNumbers));


//--------------------------------------------------------
console.log("\n ##### Calcular el factorial de un número ######");
let m=5;
function factorial(numero){
    let total=1;
    for (let i = 1; i <= numero; i++) {
        total = total * i; ;        
    }
    return total;
}
// Se realiza con una recursión de la función.
function factorialOmar(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorialVictor(n){
    return n === 1  ? 1 : n * factorialVictor(n - 1);
}


console.log(factorial(m));
console.log(factorialOmar(m));
console.log(factorialVictor(m));

//--------------------------------------------------------
console.log('/n ##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e"(3) tiene ######');
function countE(word) {
    const arrayOfChar = word.split("")
    const arrayOfLetterE =  arrayOfChar.filter((char) => char === "e")
    return arrayOfLetterE.length
  }
console.log(countE("Pepe Pecas Pica Papas pero"));

console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b));



//---------------------MÍO-----------------------------------
console.log('##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e" tiene ######');

const pepe = ["pepe", "pecas", "pica", "papas"];

function cantE(){
    for (let i = 0; i < pepe.length; i++) {
        const element = pepe.split[i];
        
    }
}