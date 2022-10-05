console.log("Sesión JS06 DOM");

//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();
cambiarEstilo();
crearElemento();

function encontrarPorId() {
    // Obtener el objeto a través de su ID
    const element = document.getElementById("titulo-h1");
    console.log("Datos del elemento: " + element.innerHTML)

    //Cambiamos los datos en el objeto
    element.innerHTML= `El <em>texto</em> en el título es: + ${element.innerHTML}`;
}

function encontrarPorTagName(){
    //Obtenemos los objetos que cumplan con el tag indicado
    //Entrega una colección con los elementos encontrados. En plural.
    let elements = document.getElementsByTagName("p");
    console.log("Elementos econtrados: "+ elements.length);

    //Obtenemos el elemento del índice 1;
    let parrafo = elements[1].innerHTML;
    console.log("Contenido en p[1] " + parrafo);
    console.log("Contenido en p[1] usando innerText: " + elements[1].innerText);
    //innerHTML nos entrega el objeto con sus elementos anidados
    //innerText nos entrega el texto del objeto, sin elementos anidados, y sin dobles espacios.
}

function encontrarPorClase(){
    const elements= document.getElementsByClassName("color");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML="Reacciones Pro";
}

function encontrarPorSelector(){
    const elements = document.querySelectorAll("h3>.color");
    console.log("Elementos encontrados: " + elements.length);

    elements[0].innerHTML = "ganas de comprar";
}

function cambiarEstilo(){
    const elements = document.querySelectorAll("p>.color");
    elements[0].style.color="red";
    elements[1].style.color="pink"; //Para que todos los elementos del <p> se cambien de color, hay que iterar con un for.
}

function crearElemento(){
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = `Este es un <strong class="color">nuevo</strong> párrafo`; //Para que la palabra "nuevo" cambie de color, hay que intercambiar el llamado de la fun cambiarEstilo y crearElemento, que están al inicio de este script
    document.getElementById("titulo").appendChild(nuevoElemento);
}