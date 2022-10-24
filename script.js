//Funcion que me aplica el esilo a la opción seleccionada en el menuy quita previamente la seleccion
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
// Funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav")
    if (x.className ==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}