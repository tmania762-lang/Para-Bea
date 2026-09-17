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


function abrirCarta() {
    cambiarPantalla("inicio", "carta");
}


function irHistoria() {
    cambiarPantalla("carta", "historia");
}


function irSentimientos() {

    cambiarPantalla(
        "historia",
        "sentimientos"
    );

    iniciarFrases();
}


function iniciarFrases() {

    const frases =
        document.querySelectorAll(".frase");

    frases.forEach(frase => {
        frase.classList.remove("visible");
    });

    frases.forEach((frase, indice) => {

        setTimeout(() => {

            frase.classList.add("visible");

        }, indice * 2500);

    });
}


function irSorpresa() {

    cambiarPantalla(
        "sentimientos",
        "sorpresa"
    );

    prepararRegalo();
}


function prepararRegalo() {

    const regalo =
        document.querySelector(".regalo");

    const texto =
        document.getElementById("textoRegalo");

    const boton =
        document.getElementById("botonFinal");


    if (!regalo) {
        return;
    }


    regalo.classList.remove("abierto");


    if (texto) {

        texto.innerHTML =
            "Toca el regalo ❤️";

    }


    if (boton) {

        boton.style.display =
            "none";

        boton.style.opacity =
            "0";

    }


    crearEstrellas();
}


function abrirRegalo() {

    const regalo =
        document.querySelector(".regalo");

    const texto =
        document.getElementById("textoRegalo");

    const boton =
        document.getElementById("botonFinal");


    if (!regalo) {
        return;
    }


    if (
        regalo.classList.contains("abierto")
    ) {
        return;
    }


    regalo.classList.add("abierto");


    setTimeout(() => {

        if (texto) {

            texto.innerHTML =
                "✨ Porque tú eres mi regalo favorito ❤️";

        }

    }, 900);


    setTimeout(() => {

        lanzarCorazones(35);

    }, 500);


    setTimeout(() => {

        if (boton) {

            boton.style.display =
                "inline-block";

            boton.style.opacity =
                "1";

        }

    }, 2500);

}


function lanzarCorazones(cantidad) {

    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");


            const simbolos = [
                "❤️",
                "💕",
                "💖",
                "💗",
                "✨"
            ];


            corazon.className =
                "corazon-volador";


            corazon.innerHTML =
                simbolos[
                    Math.floor(
                        Math.random() *
                        simbolos.length
                    )
                ];


            corazon.style.left =
                Math.random() * 100 + "%";


            corazon.style.fontSize =
                (
                    16 +
                    Math.random() * 22
                ) + "px";


            corazon.style.setProperty(
                "--duracion",
                (
                    3 +
                    Math.random() * 3
                ) + "s"
            );


            corazon.style.setProperty(
                "--movimiento",
                (
                    -120 +
                    Math.random() * 240
                ) + "px"
            );


            document.body.appendChild(
                corazon
            );


            setTimeout(() => {

                corazon.remove();

            }, 7000);

        }, i * 80);

    }

}


function crearEstrellas() {

    document
        .querySelectorAll(".estrella")
        .forEach(estrella => {
            estrella.remove();
        });


    const sorpresa =
        document.getElementById("sorpresa");


    if (!sorpresa) {
        return;
    }


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const estrella =
            document.createElement("div");


        estrella.className =
            "estrella";


        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        estrella.style.setProperty(
            "--duracion",
            (
                2 +
                Math.random() * 3
            ) + "s"
        );


        estrella.style.animationDelay =
            Math.random() * 3 + "s";


        sorpresa.appendChild(
            estrella
        );

    }

}


function irFinal() {

    cambiarPantalla(
        "sorpresa",
        "final"
    );


    setTimeout(() => {

        lanzarCorazones(20);

    }, 800);

}
