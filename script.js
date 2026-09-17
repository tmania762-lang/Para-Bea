function cambiarPantalla(actual, siguiente) {

    document.getElementById(actual)
        .classList.remove("activa");

    setTimeout(() => {

        document.getElementById(siguiente)
            .classList.add("activa");

    }, 500);
}


function abrirCarta() {

    cambiarPantalla("inicio", "carta");

}


function irHistoria() {

    alert("La historia de Bea está a punto de comenzar ❤️");

}
