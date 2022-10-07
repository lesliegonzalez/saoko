class Banda {
    //Atributo encapsulado se pone arriba del constructor.
    #nombre;
    #nParticipantes;
    #pais;
    #creacion;
    // "constructor" Es una palabra reservada.
    constructor( nombre, nParticipantes, pais ){ //nombre, nParticipantes, pais son parámetros de la función.
        //Se asigna el parámetro al atributo.
        this.#nombre = nombre; //this. sólo se ocupa en JS, en java no se ocupa.
        this.#nParticipantes = nParticipantes;
        this.#pais = pais;
        this.#creacion = new Date(); //el # antepuesto al atributo lo encapsula.
    }
    /**
     * Texto con mensaje de la banda
     * @returns mensaje con datos principales
     */
    imprimir (){
        //llamamos a los atributos.
        return `Grupo ${this.#nombre} tiene ${this.#nParticipantes} integrantes, originaria de ${this.#pais}`
    }

    get creacion (){ //get para poder mostrar los datos encapsulados.
        return this.#creacion;
    }

    get nombre (){
        return this.#nombre;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){ //set para poder modificar un dato encapsulado.
        this.#nParticipantes = nuevoNumero;
    }
}

export {Banda}; //Se indica que exportará la clase a otro archivo. Siempre al final. Si se quieren exportar más clases, se agregan con coma.