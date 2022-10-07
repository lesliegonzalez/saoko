import {Banda} from "./bandas.js";

class BandaRock extends Banda { //extends es para heredar los métodos de la clase Banda
    #nivelRudeza;
    constructor(nombre, nParticipantes, pais, nivelRudeza){
        super(nombre, nParticipantes, pais ); //Se llama al constructor de la clase parent/superior que, en este caso, es Banda
        this.#nivelRudeza = nivelRudeza; //Se está agregando este atributo
    }
    imprimir(){ //Creación de un nuevo método en la clase BandaRock
        return `${super.imprimir()} con nivel de rudeza de ${this.#nivelRudeza}` //Llama al método .imprimir() de la clase Banda, que es la super.
    }
}

export {BandaRock};