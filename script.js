
console.log("Saoko saoko");

document.getElementById("generation").style.color = "grey";
function colorTitulo(){
  console.log("Pulso el botón Generation");
  document.getElementById("generation").style.color = "blue";
}

//const { default: axios } = required("axios");
//Solicitud HTTP con axios
axios({
  method: 'get',
  url: 'https://reqres.in/api/users?page=2'
  })
    .then( response => {
      console.log(response);
    });