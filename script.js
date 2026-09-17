/* =========================
   CAMBIO DE PANTALLAS
========================= */

function cambiarPantalla(actual, siguiente) {

    const pantallaActual =
        document.getElementById(actual);

    const pantallaSiguiente =
        document.getElementById(siguiente);


    if (!pantallaActual || !pantallaSiguiente) {
        return;
    }


    pantallaActual.classList.remove("activa");


    setTimeout(() => {

        pantallaSiguiente.classList.add("activa");

    }, 500);
}


/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    cambiarPantalla(
        "inicio",
        "carta"
    );

}


/* =========================
   IR A NUESTRA HISTORIA
========================= */

function irHistoria() {

    cambiarPantalla(
        "carta",
        "historia"
    );

}


/* =========================
   IR A SENTIMIENTOS
========================= */

function irSentimientos() {

    alert(
        "❤️ Bea, todavía queda mucho por descubrir..."
    );

}
