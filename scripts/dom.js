console.log("Sesión JS06 DOM");

//encontrarPorId();
//encontrarPorTagName();
//encontrarPorClase();
encontrarPorSelector();

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
    const elements = document.getElementsByTagName("p");
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
