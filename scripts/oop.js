console.log("hola");

const miArreglo = [5,7,3,3];
const miArregloConstructor = new Array(3,4,35,7);

console.log(miArreglo);
console.log(miArregloConstructor);

//Propiedades del arreglo
console.log(miArreglo.length);
//Método del arreglo
console.log(miArreglo.sort());

//--------------------

const coraline ={
    region: [4,1,2],
    nombre: "Coraline y la puerta secreta",
    duracion: 100,
    genero: ["Animación", "Misterio", "Fantasía"],
    clasificacion: "B15",
    actores: [ //[ {}, {}, {} ]
        {
            nombre: "Teri Hatcher",
            pais: "USA"
        },
        {
            nombre: "Jennifer Saunders",
            pais: "USA"
        },
        {
            nombre:  "Dakota Fanning",
            pais: "USA"
        }
    ],
    director: {
        nombre: "Henry Selik",
        pais: "USA"
    },
    /* mostrarActores: () => { //ES un método del objeto, con una función flecha. Realiza lo mismo que las líneas 66 - 68
        coraline.actores.forEach((info) => //forEach está hace la iteración del arreglo
        console.log(`${info.nombre} de ${info.pais}`)); //info.nombre y pais accede a la información del objeto
    } */

    //Esto sustituye la función mostrarActores de arriba
    mostrarActores: function() { 
        // this hace referencia al objeto que invoque. No se pueden utilizar funciones flecha con this.
        this.actores.forEach((info) => 
        console.log(`${info.nombre} de ${info.pais}`)
        );
    },
    mostrarTodaInfo: function(){
        console.log("El nombre de la película: "+ this.nombre);
        console.log("Duración: " + this.duracion);
        console.log("Clasificación: " + this.clasificacion);
        this.mostrarActores();
        this.region.forEach(info =>{
            console.log(`Región: ${info}`);
        });
        this.genero.forEach(info =>{
            console.log(`Género: ${info}`);
        });
        console.log(`Director: ${this.director.nombre} de ${this.director.pais}`);        
    }
};

/* //Acceder al nombre
console.log("Película: " + coraline.nombre);

//coraline.actores Es un arreglo
coraline.actores.forEach( info => {
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);
});

//Mostrar el director
console.log(`Director ${coraline.director.nombre} del país ${coraline.director.pais}`);

//Cambiando la clasificación
coraline.clasificacion = "C";
console.log("Clasificación " + coraline.clasificacion);

//Agregando al actor: Ian McShane de UK, Daw French de UK
coraline.actores.push({nombre: "Ian McShane", pais: "UK"});
coraline.actores.push({nombre: "Daw French", pais: "UK"}); */

//Iteramos los actores
/* coraline.actores.forEach( info => {
    console.log(`Actor: ${info.nombre} del país ${info.pais}`);
}) */
coraline.mostrarActores();
coraline.mostrarTodaInfo();