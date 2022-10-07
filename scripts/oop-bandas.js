import {Banda} from './bandas.js' //importa la clase desde otro archivo
import {BandaRock} from './bandas-rock.js'

console.log("JS08")

const elRecodo = new Banda("El recodo", 50, "México");

//El método imprimir.() está en bandas.js
console.log(elRecodo.imprimir()); //se utilizan los paréntesis para llamar al método

const cultProf = new Banda("Cultura Profética", 5, "Puerto Rico");
console.log(cultProf.imprimir());

//------ Verificar la fecha de creación ---------
console.log(`La fecha de creación de la banda ${cultProf.nombre} fue el ${cultProf.creacion}`); //Primero mprimía "undefined" porque .creacion está encapsulado. Después de declarar el método "get creacion ()" en bandas.js, nos permite visualizar la información que contiene.

elRecodo.nParticipantes += 1; //antes de definir "set", imprimirá 50 participantes porque está creando otro elemento. Después de "set" imprimirá 51.
console.log(elRecodo.imprimir()); 

//Instanciar una banda Rock
const ironMaiden = new BandaRock("Iron Maiden", 4, "USA", 3.5);
console.log(ironMaiden.imprimir()); //.imprimir() Pertenece a la clase child


// ----------- Usando polimosfirmo ------------
// Polimosfirmo es para ejecutar una función de acuerdo al tipo de dato que esté usando

muestraDatos(cultProf); 
muestraDatos(ironMaiden);
muestraDatos("La banda dice que todo lo que hago está mal");


function muestraDatos( objBanda){
    let esTipoBanda = objBanda instanceof Banda;
    console.log("El dato es del tipo Banda (o heredado): " + esTipoBanda);
    if (esTipoBanda){
    console.log("====== Atención, toquín de =====")
    console.log(objBanda.imprimir());
    console.log("====== No te lo pierdas  =====")
    }
}
