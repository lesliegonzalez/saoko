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

//----
const getHowMany = (str, ch) => str .split("").filter(elemento => elemento === ch).length
//Es lo  mismo de arriba
`pepe pecas pica papas pero`.split("").filter(elemento => elemento === 'p').length
/**Explicación procedimiento:
 * `pepe pecas pica papas pero`.split("")  // Separa el texto en un arreglo
 * filter(elemento => elemento === 'p')  //Nuevo arreglo, que cumpla la condición.
 * .length  //Obtiene la cantidad de elementos de un arreglo.
 */
`Pepe pecas pica Papas pero`.match(/P/gi).length;  //Solución más fácil a lo de arriba
(busca = `Pepe pecas pica Papas pero`.match(/P/gi))
    ? busca.length : 0;


//++++++++++++++++++++++++++ CICLO FOR+++++++++++++++++++++++++++
console.log("------------CICLO FOR-------------");
/**
 * Sintáxis:
 *      for (inicio; condición; expresiónFinal) {
 *          instrucciones; 
 *      }
 * 
 * 1-inicio
 * 2-condición (si es verdadera)
 * 3- instrucciones (si es verdadera)
 * 4- expresión final
 * 
 */

for (let i=0; i<= 10; i++){ //opciones de expresión final:  i=i+1  i++  ++i  i+=1
    console.log("El valor de la iteración es: " + i);
    console.log("El valor de la iteración es: " + (i+1));
}

console.log("-------- FOR con CONTINUE y BREAK--------");
/**
 * La instrucción Break rompe el ciclo for, no importa el número de iteración en la que se encuentre.
 * Continue interrumpe la iteración en curso y continúa a la siguiente iteración.
 */


const ch18 = ["Abelardo", "Audrey", "Sharon", "Leslie", "Pato Lucas", "Abdí", "Jesús"];
/* for(let i= 0; i < ch18.length; i++){
    if(ch18[i] === "Pato Lucas"){
        console.warn("Esta persona no pertenece a la CH18: " + ch18[i]);
        break;
    }
    console.log("Integrante de CH18: " + ch18[i]);
}
 */
for(let i= 0; i < ch18.length; i++){
    if(ch18[i] !== "Pato Lucas"){
        continue;
    }
    console.warn("Esta persona no pertenece a la CH18: " + ch18[i]);
}


console.log("-------- MATRICES --------");
// const array = [ [] , [] , [] ];

const generation = [
    ["Abelardo", "Audrey", "Sharon", "Leslie", "Pato Lucas", "Abdí", "Jesús"], 
    ["Alejandro", "Karen", "Raúl", "El bromas", "Mariana"], 
    ["Emiliano", "El bromas", "Jonathan", "Esteban", "El bromas"]
];

//Imprimir a cada integrante de cada cohorte en Generation
for(let i = 0; i< generation.length; i++){
    console.log(`Los integrantes de la cohorte ${i+1} son:`)
    for(let j = 0; j< generation[i].length; j++){
        console.log(generation[i][j]);
    }
}
console.log("Próxima presentación: " + generation[1][2]); // [fila] [columna] Apunta a Raúl 

//Encontrar a "El bromas" e indicar con una alerta la cohorte donde se encuentra
continua_buscando: //El label siempre debe ir pegado al for
for(let i=0; i<generation.length;i++){
    for(let j=0; j<generation[i].length;j++){
        if (generation[i][j] === 'El Bromas'){
            console.warn(`El bromas se encuentra en la corte ${i+1} en la posición ${j+1}`)
            continue continua_buscando
        }
        console.log(`Numero de iteración ${i}-${j}`)
    }
}
  
//++++++++++++++++++++++++++ CICLO WHILE +++++++++++++++++++++++++++
console.log("-------- MATRICES --------");
/**
 * Sintáxis:
 *      while (condición){
 *          instrucción;
 *      }
 */
//Encontrar un número que pensé del 1 al 10

/* let findNumber = true;
let number = 1;
while(findNumber){
    if (confirm(`¿El número es ${number}?`)){
        findNumber= false ;
        alert (`Fantástico, tu número es el ${number}`)
    }
    else if(number>= 10){
        findNumber = false;
        alert(`Humano, ya vete, no sabes jugar`);
    }
    number++;
} */

/* let number = 1;
while(confirm(`¿El número es ${number}?`)){
    number++;
    if (number > 10){
        alert (`Fantástico, tu número es el ${number}`)alert(`Humano, ya vete, no sabes jugar`);
        break;
    }    
}
alert(`Fantástico, tu número es el ${number}`); */

let bandera = false;
while(bandera){
    console.log("Mensaje dentro del ciclo while");
}

do{
    console.log("Mensaje dentro del do-while")
} while(bandera);

//¿Cuántas veces se imprime en consola y cuál es el valor final? 7 y 11
contador= 3;
while(contador++<10){
    console.log("Valor de contador: " + contador);
}
console.log("Valor final de contador: " + contador);
