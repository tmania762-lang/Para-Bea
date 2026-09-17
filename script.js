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

    cambiarPantalla(
        "historia",
        "sentimientos"
    );

    iniciarFrases();

}


/* =========================
   FRASES
========================= */

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


/* =========================
   IR A LA SORPRESA
========================= */

function irSorpresa() {

    cambiarPantalla(
        "sentimientos",
        "sorpresa"
    );

    prepararRegalo();

}


/* =========================
   PREPARAR REGALO
========================= */

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


/* =========================
   ABRIR REGALO
========================= */

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


    /* Evitar abrirlo dos veces */

    if (
        regalo.classList.contains("abierto")
    ) {
        return;
    }


    /* =========================
       ABRIR CAJA
    ========================== */

    regalo.classList.add("abierto");


    /* =========================
       CAMBIAR TEXTO
    ========================== */

    setTimeout(() => {

        if (texto) {

            texto.innerHTML =
                "✨ Porque tú eres mi regalo favorito ❤️";

        }

    }, 900);


    /* =========================
       LANZAR CORAZONES
    ========================== */

    setTimeout(() => {

        lanzarCorazones(35);

    }, 500);


    /* =========================
       MOSTRAR BOTÓN FINAL
    ========================== */

    setTimeout(() => {

        if (boton) {

            boton.style.display =
                "inline-block";

            boton.style.opacity =
                "1";

        }

    }, 2500);

}


/* =========================
   CORAZONES VOLADORES
========================= */

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


            /* Posición horizontal */

            corazon.style.left =
                Math.random() * 100 + "%";


            /* Tamaño aleatorio */

            corazon.style.fontSize =
                (
                    16 +
                    Math.random() * 22
                ) + "px";


            /* Duración */

            corazon.style.setProperty(
                "--duracion",
                (
                    3 +
                    Math.random() * 3
                ) + "s"
            );


            /* Movimiento */

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


            /* Eliminar después */

            setTimeout(() => {

                corazon.remove();

            }, 7000);


        }, i * 80);

    }

}


/* =========================
   ESTRELLAS
========================= */

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


        /* Posición */

        estrella.style.left =
            Math.random() * 100 + "%";


        estrella.style.top =
            Math.random() * 100 + "%";


        /* Velocidad */

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


/* =========================
   IR AL FINAL
========================= */

function irFinal() {

    cambiarPantalla(
        "sorpresa",
        "final"
    );


    /* Corazones finales */

    setTimeout(() => {

        lanzarCorazones(20);

    }, 800);

               }
