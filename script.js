/* ==================================================
   PARA-BEA V2
   JAVASCRIPT PRINCIPAL
================================================== */


/* ==================================================
   ⚙️ CONFIGURACIÓN
================================================== */

/*
   MODO_PRUEBA = true
   Permite entrar a la sorpresa inmediatamente.

   Cuando la página esté terminada:
   cambiar a false.

   Con false volverá a funcionar el bloqueo
   hasta el 7 de octubre de 2026.
*/

const MODO_PRUEBA = true;


/* ==================================================
   CAMBIO DE PANTALLAS
================================================== */

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


/* ==================================================
   INICIO → CARTA
================================================== */

function abrirCarta() {

    cambiarPantalla(
        "inicio",
        "carta"
    );
}


/* ==================================================
   CARTA → HISTORIA
================================================== */

function irHistoria() {

    cambiarPantalla(
        "carta",
        "historia"
    );

}


/* ==================================================
   HISTORIA → SENTIMIENTOS
================================================== */

function irSentimientos() {

    cambiarPantalla(
        "historia",
        "sentimientos"
    );

    iniciarFrases();
}


/* ==================================================
   ANIMACIÓN DE FRASES
================================================== */

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


/* ==================================================
   SENTIMIENTOS → SORPRESA
================================================== */

function irSorpresa() {

    cambiarPantalla(
        "sentimientos",
        "sorpresa"
    );

    prepararRegalo();
}


/* ==================================================
   PREPARAR REGALO
================================================== */

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


/* ==================================================
   ABRIR REGALO
================================================== */

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


    /* EVITAR ABRIRLO DOS VECES */

    if (
        regalo.classList.contains("abierto")
    ) {
        return;
    }


    regalo.classList.add("abierto");


    /* CAMBIAR MENSAJE */

    setTimeout(() => {

        if (texto) {

            texto.innerHTML =
                "✨ Hay recuerdos que pasan... y otros que se quedan para siempre en el corazón. ❤️";

        }

    }, 900);


    /* EXPLOSIÓN DE CORAZONES */

    setTimeout(() => {

        lanzarCorazones(35);

    }, 500);


    /* MOSTRAR BOTÓN FINAL */

    setTimeout(() => {

        if (boton) {

            boton.style.display =
                "inline-block";

            boton.style.opacity =
                "1";

        }

    }, 2500);

}


/* ==================================================
   CORAZONES VOLADORES
================================================== */

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


/* ==================================================
   ESTRELLAS DEL REGALO
================================================== */

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


/* ==================================================
   SORPRESA → FINAL
================================================== */

function irFinal() {

    cambiarPantalla(
        "sorpresa",
        "final"
    );


    setTimeout(() => {

        lanzarCorazones(20);

    }, 800);

}


/* ==================================================
   🔒 CONTADOR DE APERTURA
================================================== */

function iniciarCuentaRegresiva() {

    const fechaObjetivo =
        new Date("2026-10-07T00:00:00");


    const bloqueo =
        document.getElementById(
            "bloqueoSorpresa"
        );


    const candado =
        document.getElementById(
            "candado"
        );


    const boton =
        document.getElementById(
            "botonSorpresa"
        );


    const dias =
        document.getElementById(
            "dias"
        );


    const horas =
        document.getElementById(
            "horas"
        );


    const minutos =
        document.getElementById(
            "minutos"
        );


    const segundos =
        document.getElementById(
            "segundos"
        );


    if (
        !bloqueo ||
        !candado ||
        !boton ||
        !dias ||
        !horas ||
        !minutos ||
        !segundos
    ) {
        return;
    }


    /* ==================================================
       🧪 MODO PRUEBA
    ================================================== */

    if (MODO_PRUEBA) {

        desbloquearSorpresa();

        return;
    }


    /* ==================================================
       CONTADOR REAL
    ================================================== */

    function actualizarContador() {

        const ahora =
            new Date();


        let diferencia =
            fechaObjetivo.getTime() -
            ahora.getTime();


        /* =========================
           FECHA ALCANZADA
        ========================= */

        if (diferencia <= 0) {

            desbloquearSorpresa();

            return true;
        }


        /* =========================
           CÁLCULO
        ========================= */

        const totalSegundos =
            Math.floor(
                diferencia / 1000
            );


        const cantidadDias =
            Math.floor(
                totalSegundos / 86400
            );


        const cantidadHoras =
            Math.floor(
                (
                    totalSegundos % 86400
                ) / 3600
            );


        const cantidadMinutos =
            Math.floor(
                (
                    totalSegundos % 3600
                ) / 60
            );


        const cantidadSegundos =
            totalSegundos % 60;


        dias.textContent =
            String(
                cantidadDias
            ).padStart(2, "0");


        horas.textContent =
            String(
                cantidadHoras
            ).padStart(2, "0");


        minutos.textContent =
            String(
                cantidadMinutos
            ).padStart(2, "0");


        segundos.textContent =
            String(
                cantidadSegundos
            ).padStart(2, "0");


        return false;
    }


    /* COMPROBAR AHORA */

    if (
        actualizarContador()
    ) {

        return;
    }


    /* ACTUALIZAR CADA SEGUNDO */

    const intervalo =
        setInterval(() => {

            if (
                actualizarContador()
            ) {

                clearInterval(
                    intervalo
                );

            }

        }, 1000);

}


/* ==================================================
   🔓 DESBLOQUEAR SORPRESA
================================================== */

function desbloquearSorpresa() {

    const bloqueo =
        document.getElementById(
            "bloqueoSorpresa"
        );


    const candado =
        document.getElementById(
            "candado"
        );


    const boton =
        document.getElementById(
            "botonSorpresa"
        );


    if (!bloqueo || !candado || !boton) {
        return;
    }


    /* CAMBIAR CANDADO */

    candado.textContent =
        "🔓";


    candado.classList.add(
        "abierto"
    );


    /* OCULTAR CUENTA ATRÁS */

    bloqueo.classList.add(
        "oculto"
    );


    /* ACTIVAR BOTÓN */

    boton.disabled =
        false;


    boton.classList.add(
        "desbloqueado"
    );


    /* TEXTO DEL BOTÓN */

    boton.textContent =
        "✨ Abrir mi sorpresa";

}


/* ==================================================
   🚀 INICIAR
================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarCuentaRegresiva();

    }
);