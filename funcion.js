let mostrar_d = true;
let mostrar1 = false;
let mostrar2 = false;
let mostrar3 = false;
let color = "claro";

// Ocultar o mostrar datos personales:

document.getElementById("dp").onclick = function () {
  if (mostrar_d == true){
    document.getElementById("lista_dp").style.display = "none";
    document.getElementById("dp").innerHTML = "MOSTRAR DATOS PERSONALES";
    mostrar_d = false;
   } else {
    document.getElementById("lista_dp").style.display = "block";
    document.getElementById("dp").innerHTML = "DATOS PERSONALES";
    mostrar_d = true;
  }
}

// Botón para el cambio de color de fondo:

document.getElementById("color_fondo").addEventListener("click", function (){
  if (color == "claro"){
    document.body.style.background = "#464644";
    document.getElementById("color_fondo").innerHTML = "Fondo blanco";
    color = "oscuro";
    document.getElementById("h1").style.color = "white";
    document.getElementById("h2").style.color = "white";
    document.getElementById("lista_dp").style.color = "white";
    document.getElementById("list_rs").style.color = "white";
    document.getElementById("list_apt").style.color = "white";
    document.getElementById("descp").style.color = "white";
    document.getElementById("form").style.color = "white";
    document.getElementById("trabajos").style.color = "white";

  } else {
    document.body.style.background = "#FFFFFF";
    document.getElementById("color_fondo").innerHTML = "Fondo cálido";
    color = "claro";
    document.getElementById("h1").style.color = "black";
    document.getElementById("h2").style.color = "black";
    document.getElementById("lista_dp").style.color = "black";
    document.getElementById("list_rs").style.color = "black";
    document.getElementById("list_apt").style.color = "black";
    document.getElementById("descp").style.color = "black";
    document.getElementById("form").style.color = "black";
    document.getElementById("trabajos").style.color = "black";

  }

})

// Ocultar o mostrar descripción de los trabajos:

document.getElementById("trabajo1").onclick = function () {
  if (mostrar1 == false){
    document.getElementById("trabajo1").style.display = "none";
    document.getElementById("trabajo11").style.display = "block";
    document.getElementById("trabajo111").style.display = "block";
    mostrar1 = true;
  }
}
document.getElementById("trabajo111").onclick = function () {
  if (mostrar1 == true){
    document.getElementById("trabajo1").style.display = "block";
    document.getElementById("trabajo11").style.display = "none";
    document.getElementById("trabajo111").style.display = "none";
    mostrar1 = false;
  }
}


document.getElementById("trabajo2").onclick = function () {
  if (mostrar2 == false){
    document.getElementById("trabajo2").style.display = "none";
    document.getElementById("trabajo22").style.display = "block";
    document.getElementById("trabajo222").style.display = "block";
    mostrar2 = true;
  }
}
document.getElementById("trabajo222").onclick = function () {
  if (mostrar2 == true){
    document.getElementById("trabajo2").style.display = "block";
    document.getElementById("trabajo22").style.display = "none";
    document.getElementById("trabajo222").style.display = "none";
    mostrar2 = false;
  }
}


document.getElementById("trabajo3").onclick = function () {
  if (mostrar3 == false){
    document.getElementById("trabajo3").style.display = "none";
    document.getElementById("trabajo33").style.display = "block";
    document.getElementById("trabajo333").style.display = "block";
    mostrar3 = true;
  }
}
document.getElementById("trabajo333").onclick = function () {
  if (mostrar3 == true){
    document.getElementById("trabajo3").style.display = "block";
    document.getElementById("trabajo33").style.display = "none";
    document.getElementById("trabajo333").style.display = "none";
    mostrar3 = false;
  }
}


