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

    cambiarPantalla("carta", "historia");

}


function irSentimientos() {

    alert("Ahora vamos a descubrir todo lo que siento por ti ❤️");

}
