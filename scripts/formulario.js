console.log("Hola");

//const form = document.getElementById("formulario");
const objForm = document.forms["formulario"]; //Entrega el mismo resultado que la variable de arriba


                    //(evento, funciónCallback)         
objForm.addEventListener( 'submit' , event =>{
    event.preventDefault();
    console.log("El evento submit se ha generado");
    let email = objForm.elements['inputEmail4'].value;
    console.log(email);
    console.log(objForm.elements['inputPassword4'].value);
});
