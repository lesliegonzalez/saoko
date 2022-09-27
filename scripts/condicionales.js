console.log("Condicionales");

//+++++++++ Declaración de bloque +++++++++++

let nombre = "Rafa";
let ciudad = "Guadalajara";
{
    let nombre = "Leslie";
    let apellido = "González";
    let ciudad = "CDMX";
    var color = "amarillo";
    console.log(`Mi nombre es ${nombre} ${apellido}, que evive en ${ciudad} y le gusta el color ${color}`);
}

console.log(`Participante: ${nombre}, que vive en ${ciudad}. Le gusta el ${color}`);

//++++++++++++++ Condicional IF +++++++++++++++++
/**
 * Sintaxis:
 *      if(condicionVerdadera) instrucción;
 * 
 * 
 *      if(condicionVerdadera){
 *          instrucciones;
 *      }
 */

let edad = 25;

console.log("Declaración antes del if");
if(edad > 24) console.log("Es mayor a 25 años");
else{
    console.log("Es menor a 25 años");
    console.log("Sigue participando");
}

console.log("Declaración después del if");


//++++++++++++++ Operador ternario +++++++++++++++++
//Sintaxis:      condición ? condición_verdadera : condición_falsa;
console.log(`La edad es ${edad>24 ? "mayor":"menor"} a 25`);
console.log(`La edad es ${edad===25 ? "es igual": (edad>24 ? "mayor":"menor")} a 25`);

//++++++++++++++++ Condicional if, else if, else +++++++++++++++++++
/**
 * Sintaxis:
 * 
 *      if(condicionVerdadera) {
 *          instrucciones;
 *      }
 *      else if (otraInstruccion) {
 *      }
 *      else if (otraInstruccion) {
 *      }
 *      else {
 *          instrucciones;
 *      }
 */

edad = 20;

if(edad === 25) comparacion = "igual";
else if(edad > 24) comparacion = "mayor";
else comparacion = "menor";

console.log(`(if,else if, else) La edad es ${comparacion} a 25`);
// Es la abstracción de las líneas 63 - 67      console.log(`La edad es ${edad ===25 ? "es igual": edad>24 ? "mayor":"menor"} a 25`);

//++++++++++++++++++ Condicional switch ++++++++++++++++++++
/**
 * Sintaxis:
 *          switch(expresion){
 *              case valor1:
 *                      instrucciones;
 *                      break;
 *              case valor2:
 *                      instrucciones;
 *                      break;
 *              case valor3:
 *                      instrucciones;
 *                      break;
 *              default:
 *                      instrucciones;
 *          }
 */

 let valor = Math.sign(25 - edad);

 switch (valor) {
     case -1:
         comparacion = "mayor";
         break;
  
     case 1:
         comparacion = "menor";
         break;
     case 0:
         comparacion = "igual";
         break;
 }
 
 console.log(`La edad es ${comparacion} a 25.`);

//Otro ejemplo:

let numeroMes = 1;
estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    estacion = "Invierno";
    break;
  case 1:
    mes = "Enero";
    estacion = "Invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion = "Primavera";
    break;
  case 4:
    mes = "Abril";
    estacion = "Primavera";
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion = "Verano";
    break;
  case 7:
    mes = "Julio";
    estacion = "Verano";
    break;
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
    estacion = "Otoño";
    break;
  case 10:
    mes = "Octubre";
    estacion = "Otoño";
    break;
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

//-------------

numeroMes = 1;
estacion = "", mes = "";

if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }


  let oneline = true;
  let active = true;
  if (oneline) {
    if(active) {
        console.log("James")
    }
  }

  oneline && active && console.log("James");