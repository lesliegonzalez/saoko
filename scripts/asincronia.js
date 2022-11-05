console.log("Sesión JS07 Asincronía");

console.log("01 - Primera instrucción");

//setTiemout(callback function, tiempo_para ejecutar (en ms));
//setTimeout(() => console.log ("01.5 Holicrayoli"), 3000);
const temporizador = (retardo, msj) =>{  //Se ejecuta una vez
    setTimeout( () => console.log(msj), retardo );
}

const intervalo = (tiempo, msj ) => { //Se ejecuta repetidas veces
    setInterval( ()=> console.log(msj), tiempo);
}

//temporizador (5000, "02 - Segunda instrucción");
//intervalo(2000, "Hey, humano"); // se detiene con clearTimeout()

console.log("03 - Tercera instrucción");

//--------------------------- API FETCH -----------------------

console.log("01 - Antes de la solicitud fetch");

function solicitudFetch(userToFind){
/**Fetch sirve para realizar solicitudes HTTP
 * Los .then se 
*Sintáxis: fetch(url a la que se conecta, {darle config. adicional})   Si hacemos una solicitud get sólo se necesita la url
*                  .then (función callback) //nos da la respuesta del fetch
*
*FunctionCallback(parámetro){En el parámetro nos dará el resultado
*/
fetch("https://reqres.in/api/users?delay=3") 
    .then( (response) => response.json()) //Convertir JSON a objeto. Esta instrucción hace lo mismo que JSON.parse()
    .then( (conversion) => {
        /* console.log(conversion); */
        //Buscando a Michael  forma 1 
        /* console.log(conversion.data[0].first_name);
        console.log(conversion.data[0].email); */

        //Buscando a Michael forma 2
        /* let {email, first_name} = conversion.data[0];
        console.log(first_name, email); */

        //Buscando a Michael forma 3
        let encontrado = conversion.data.find(
            (data) => data.first_name === userToFind
        );
        console.log(encontrado);

        let objUser = document.getElementById("user-name"); //Referencia de los inputs
        let objEmail = document.getElementById("user-email");
        objUser.value = encontrado.first_name; 
        objEmail.value = encontrado.email; 
        usarLocalStorage();
        return "hola"; //Sólo ejemplo. Se necesita el siguiente .then de esto para que tome la instrucción
    })
    .then (msj => console.log("Retorno del then anterior " + msj)) //Sólo un ejemplo de cómo se pueden anidar más .then
    //Se activará el método .catch si hubiera un problema con la url, y lo mostrará en consola
    .catch(error => {
        //Procesanso el error que suceda en el fetch y los then de arriba
        console.log(error)
    }); //Adentro del paréntesis debe ir una funcióncallback/ función flecha. Este método cachará lo errores  del thn y fetch
}
console.log("03 - Después de la solicitud fetch");


function leerUsuario(usuario){
    console.log("Usuario a buscar: " + usuario);
    const user = JSON.parse(localStorage.getItem("user"));
    //Este if sirve para que cada cierto tiempo se borre el local storage
    if(user && user.timeout > Date.now()){ //Date.now obtiene el númro de milisegundos transcurridos desde enero de 1970
        leerLocalStorage();
    }
    else{
       solicitudFetch(usuario); 
    }
    
}

function usarLocalStorage(){
    let objUser = document.getElementById("user-name");
    let objEmail = document.getElementById("user-email");
    //localStorage.setItem('clave', valor)
    let user = {
        name: objUser.value,
        email: objEmail.value,
        timeout : Date.now()+60000 //Leer el tiempo actual y sumarle un minuto
    }
    localStorage.setItem("name", objUser.value);
    localStorage.setItem("email", objEmail.value);

    //Para convertir un objeto a JSON: JSON.stringify(objeto)
    localStorage.setItem("user", JSON.stringify(user));
}

function leerLocalStorage(){
    const objUser = document.getElementById("user-name");
    const objEmail = document.getElementById("user-email");

    //Convertir de JSON a objeto: JSON.parse(texto);
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    objUser.value = user.name; 
    objEmail.value = user.email;
}

function miPromesa(){
    let promesa = new Promise((resolve, reject)=> {; //Una promesa se define con new Promise(),en sus parámetros debe tener una función callback o flecha
        const expresion = true; //Cualquier operación

        if(expresion) resolve("La promesa fue exitosa"); //Puedo devolver cualquier tipo de dato
        else reject("La promesa NO se resolvió");
    });
    /**resolve lo va a devolver cuando haya sido exitossa
     * reject cuando haya sido erróneo
     */

    //Aquí se está consumiendo la promesa
    promesa
    .then( response => console.log(response)) //Cacha el if(expresion), porque se cumple
    .catch(error => console.log(error)) //Cacha el else(reject), porque no fue exitosa
    .finally(console.log("Se terminó de ejecutar la promesa"));
}
miPromesa();

let division = (a, b) => {
    return new Promise( (resolve, reject) => {
        if(b!== 0) resolve(a/b);
        else reject("No se puede realizar una división entre cero");
    });
}
//Aquí se consume mi promesa, se va resolviendo sin esperarse a que se resuelva alguna promesa (no respeta el órden)
/* division(4,0)
    .then(resultado => console.log("El resultado de la división = " + resultado))
    .catch( error => console.log("error en la división: " + error));

division(4,2)
    .then(resultado => console.log("El resultado de la división = " + resultado))
    .catch( error => console.log("error en la división: " + error)); */



//Se detiene en cada línea hasta que resolverlo, y después pasa a la siguiente. Las dos funciones de arriba. 
async function operaciones(){
    //Los bloques try y catch nos sirven para el manejo de errores

    try{ //Hace el resolve 
    const result1 = await division(4,0);
    console.log("El resultado de la división = " + result1);
    }
    catch (error){ //Hace el reject, en caso de error en el bloque try.
        console.log("No se puede realizar la división: " + error);
    }

    try{
      const result2 = await division(4,2);
    console.log("El resultado de la división = " + result2);  
    }
    catch (error){
        console.log("No se puede realizar la división: " + error);
    }
};
operaciones();