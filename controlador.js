let boton=document.getElementById("boton");
let titulo1=document.getElementById("titulo1");
let titulo2=document.getElementById("titulo2");
let titulo3=document.getElementById("titulo3");
let imagen1=document.getElementById("imagen1");
let imagen2=document.getElementById("imagen2");
let imagen3=document.getElementById("imagen3");
let cancion1=document.getElementById("cancion1");
let bandera = false;

boton.addEventListener("click", cambioFoto);

function cambioFoto(){
    if (bandera = true) {
        titulo1.textContent="call out my name";
        imagen1.src="img/imagen4.jpg";
        cancion1.src="audio/cancion4.mp3";
        titulo2.textContent="psycho";
        imagen2.src="img/imagen5.jpg";
        cancion2.src="audio/cancion5.mp3";
        titulo3.textContent="ride it";
        imagen3.src="img/imagen6.jpg";
        cancion3.src="audio/cancion6.mp3";
        bandera=false;
    }
    else{
        titulo1.textContent="Save Your Tears";
        imagen1.src="img/imagen1.jpg";
        cancion1.src="audio/cancion1.mp3";
        titulo2.textContent="Blinding Lights";
        imagen2.src="img/imagen2.jpg";
        cancion2.src="audio/cancion2.mp3";
        titulo3.textContent="In Your Eyes";
        imagen3.src="img/imagen3.jpg";
        cancion3.src="audio/cancion3.mp3";
        bandera=true;
    }
    
}

