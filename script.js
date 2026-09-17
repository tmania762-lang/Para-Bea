/* =========================
   CONFIGURACIÓN GENERAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;

    font-family: Georgia, serif;

    background: #10050f;

    color: white;

    overflow: hidden;
}


/* =========================
   PANTALLAS
========================= */

.pantalla {
    position: fixed;

    inset: 0;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 30px;

    opacity: 0;

    visibility: hidden;

    transform: scale(1.05);

    transition:
        opacity 1s ease,
        transform 1s ease,
        visibility 1s;
}


.pantalla.activa {
    opacity: 1;

    visibility: visible;

    transform: scale(1);
}


/* =========================
   FONDOS
========================= */

#inicio {

    background:

        radial-gradient(
            circle at center,
            rgba(
                128,
                35,
                95,
                0.35
            ),
            transparent 45%
        ),

        linear-gradient(
            135deg,
            #120812,
            #2b1028,
            #10050f
        );
}


#carta {

    background:

        radial-gradient(
            circle at center,
            rgba(
                160,
                45,
                100,
                0.3
            ),
            transparent 50%
        ),

        linear-gradient(
            135deg,
            #180915,
            #32132d,
            #10050f
        );
}


#historia {

    background:

        radial-gradient(
            circle at center,
            rgba(
                90,
                45,
                120,
                0.3
            ),
            transparent 50%
        ),

        linear-gradient(
            135deg,
            #0d0818,
            #21132f,
            #09050e
        );

    overflow-y: auto;

    align-items: flex-start;

    padding-top: 60px;

    padding-bottom: 80px;
}


#sentimientos {

    background:

        radial-gradient(
            circle at center,
            rgba(
                150,
                40,
                100,
                0.35
            ),
            transparent 55%
        ),

        linear-gradient(
            135deg,
            #180817,
            #35132f,
            #10050f
        );
}


#sorpresa {

    background:

        radial-gradient(
            circle at center,
            rgba(
                180,
                35,
                100,
                0.45
            ),
            transparent 50%
        ),

        linear-gradient(
            135deg,
            #12040f,
            #351026,
            #080308
        );

    overflow: hidden;
}


#final {

    background:

        radial-gradient(
            circle at center,
            rgba(
                170,
                45,
                110,
                0.4
            ),
            transparent 55%
        ),

        linear-gradient(
            135deg,
            #170713,
            #36132f,
            #0c040b
        );
}


/* =========================
   CONTENEDORES
========================= */

.contenido {

    text-align: center;

    max-width: 700px;
}


.carta {

    max-width: 650px;

    text-align: center;

    padding: 35px;
}


.historia {

    width: 100%;

    max-width: 650px;

    text-align: center;
}


.sentimientos {

    width: 100%;

    max-width: 650px;

    text-align: center;
}


.sorpresa {

    width: 100%;

    max-width: 700px;

    text-align: center;

    position: relative;

    z-index: 10;
}


.final {

    text-align: center;

    max-width: 700px;
}


/* =========================
   TEXTOS
========================= */

.corazon {

    font-size: 55px;

    margin-bottom: 25px;

    animation:
        latido 1.5s infinite;
}


.fecha {

    font-size: 15px;

    letter-spacing: 7px;

    opacity: 0.65;

    margin-bottom: 20px;
}


h1 {

    font-size:
        clamp(
            70px,
            20vw,
            150px
        );

    letter-spacing: 15px;

    margin-bottom: 20px;

    font-weight: normal;
}


h2 {

    font-size: 55px;

    font-weight: normal;

    margin-bottom: 35px;
}


.mensaje {

    font-size: 20px;

    line-height: 1.6;

    opacity: 0.85;

    margin-bottom: 40px;
}


.pequeno {

    letter-spacing: 6px;

    font-size: 13px;

    opacity: 0.6;

    margin-bottom: 15px;
}


.texto-carta {

    font-size: 19px;

    line-height: 1.8;

    margin-bottom: 22px;

    opacity: 0.9;
}


.firma {

    margin-top: 35px;

    margin-bottom: 35px;

    font-size: 20px;

    font-style: italic;
}


/* =========================
   BOTONES
========================= */

button {

    border:
        1px solid
        rgba(
            255,
            255,
            255,
            0.4
        );

    background:
        rgba(
            255,
            255,
            255,
            0.07
        );

    color: white;

    padding: 16px 30px;

    border-radius: 50px;

    font-size: 16px;

    font-family: Georgia, serif;

    cursor: pointer;

    backdrop-filter: blur(10px);

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
}


button:hover {

    background:
        rgba(
            255,
            255,
            255,
            0.18
        );

    transform:
        scale(1.05);

    box-shadow:
        0 0 30px
        rgba(
            255,
            120,
            190,
            0.25
        );
}


/* =========================
   HISTORIA
========================= */

.texto-historia {

    font-size: 18px;

    line-height: 1.8;

    opacity: 0.8;

    margin-bottom: 50px;
}


.timeline {

    position: relative;

    width: 100%;

    padding-left: 35px;
}


.timeline::before {

    content: "";

    position: absolute;

    left: 12px;

    top: 0;

    bottom: 0;

    width: 2px;

    background:

        linear-gradient(
            to bottom,
            transparent,
            rgba(
                255,
                255,
                255,
                0.35
            ),
            transparent
        );
}


.momento {

    position: relative;

    margin-bottom: 55px;

    text-align: left;
}


.punto {

    position: absolute;

    left: -29px;

    top: 20px;

    width: 12px;

    height: 12px;

    border-radius: 50%;

    background: white;

    box-shadow:
        0 0 15px
        rgba(
            255,
            255,
            255,
            0.8
        );
}


.recuerdo {

    padding: 18px;

    background:
        rgba(
            255,
            255,
            255,
            0.06
        );

    border:
        1px solid
        rgba(
            255,
            255,
            255,
            0.12
        );

    border-radius: 20px;

    backdrop-filter: blur(12px);

    box-shadow:
        0 20px 60px
        rgba(
            0,
            0,
            0,
            0.35
        );
}


.foto-placeholder {

    width: 100%;

    height: 240px;

    overflow: hidden;

    border-radius: 15px;

    margin-bottom: 20px;
}


.foto-placeholder img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition:
        transform 0.8s ease;
}


.recuerdo:hover
.foto-placeholder img {

    transform:
        scale(1.05);
}


.fecha-recuerdo {

    display: block;

    font-size: 11px;

    letter-spacing: 3px;

    opacity: 0.55;

    margin-bottom: 8px;
}


.recuerdo h3 {

    font-size: 23px;

    font-weight: normal;

    margin-bottom: 10px;
}


.recuerdo p {

    line-height: 1.7;

    opacity: 0.75;
}


.historia button {

    margin-top: 10px;

    margin-bottom: 30px;
}


/* =========================
   SENTIMIENTOS
========================= */

.frases {

    min-height: 300px;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    margin-bottom: 35px;
}


.frase {

    position: absolute;

    max-width: 600px;

    font-size: 22px;

    line-height: 1.7;

    opacity: 0;

    transform:
        translateY(25px);

    transition:
        opacity 1.5s ease,
        transform 1.5s ease;
}


.frase.visible {

    opacity: 1;

    transform:
        translateY(0);
}


.frase5 {

    font-size: 25px;

    font-style: italic;
}


/* ==================================================
   🎁 ESCENA DEL REGALO
================================================== */

#sorpresa::before {

    content: "";

    position: absolute;

    width: 500px;

    height: 500px;

    left: 50%;

    top: 50%;

    transform:
        translate(
            -50%,
            -45%
        );

    border-radius: 50%;

    background:

        radial-gradient(
            circle,
            rgba(
                255,
                80,
                170,
                0.22
            ),
            transparent 65%
        );

    filter: blur(20px);

    animation:
        respirarLuz 4s ease-in-out infinite;
}


/* =========================
   TÍTULO DEL REGALO
========================= */

.sorpresa h2 {

    margin-bottom: 20px;
}


.sorpresa > p {

    font-size: 18px;

    opacity: 0.8;
}


/* =========================
   CAJA DE REGALO
========================= */

.regalo {

    position: relative;

    width: 220px;

    height: 210px;

    margin:
        60px auto 35px;

    cursor: pointer;

    transform:
        translateY(0);

    transition:
        transform 0.4s ease;

    filter:
        drop-shadow(
            0 30px 25px
            rgba(
                0,
                0,
                0,
                0.45
            )
        );
}


.regalo:hover {

    transform:
        translateY(-8px)
        scale(1.04);
}


/* =========================
   CAJA
========================= */

.caja {

    position: absolute;

    left: 35px;

    bottom: 15px;

    width: 150px;

    height: 115px;

    border-radius: 6px;

    background:

        linear-gradient(
            90deg,
            #741747,
            #c53f83,
            #8c1e58
        );

    box-shadow:

        inset 0 0 20px
        rgba(
            255,
            255,
            255,
            0.12
        );
}


/* =========================
   TAPA
========================= */

.tapa {

    position: absolute;

    left: 25px;

    top: 55px;

    width: 170px;

    height: 38px;

    border-radius: 6px;

    background:

        linear-gradient(
            90deg,
            #92205b,
            #dc5795,
            #9c215f
        );

    z-index: 5;

    transform-origin:
        center bottom;

    transition:
        transform 1s
        cubic-bezier(
            .2,
            .8,
            .2,
            1
        );
}


/* =========================
   CINTA
========================= */

.lazo {

    position: absolute;

    left: 96px;

    bottom: 15px;

    width: 28px;

    height: 115px;

    background:

        linear-gradient(
            90deg,
            #ffd7e9,
            #fff2f8,
            #eeb1cf
        );

    z-index: 6;

    border-radius: 3px;

    box-shadow:

        0 0 10px
        rgba(
            255,
            210,
            235,
            0.25
        );
}


/* =========================
   LAZO SUPERIOR
========================= */

.regalo::before,
.regalo::after {

    content: "";

    position: absolute;

    top: 18px;

    width: 65px;

    height: 42px;

    border:
        10px solid
        #ffd7e9;

    z-index: 7;

    transition:
        transform 1s ease;
}


.regalo::before {

    left: 55px;

    border-radius:
        60% 20%
        60% 20%;

    transform:
        rotate(25deg);
}


.regalo::after {

    right: 55px;

    border-radius:
        20% 60%
        20% 60%;

    transform:
        rotate(-25deg);
}


/* =========================
   LUZ INTERIOR
========================= */

.regalo .luz {

    position: absolute;

    left: 50%;

    top: 65px;

    width: 100px;

    height: 100px;

    transform:
        translate(
            -50%,
            -50%
        )
        scale(0);

    border-radius: 50%;

    background:

        radial-gradient(
            circle,
            white 0%,
            rgba(
                255,
                180,
                225,
                0.9
            ) 20%,
            rgba(
                255,
                80,
                180,
                0.25
            ) 55%,
            transparent 70%
        );

    filter: blur(3px);

    z-index: 2;

    transition:
        transform 1s ease;
}


/* =========================
   CAJA ABIERTA
========================= */

.regalo.abierto .tapa {

    transform:
        translateY(-85px)
        rotate(-8deg);
}


.regalo.abierto::before {

    transform:
        translateX(-18px)
        translateY(-35px)
        rotate(-25deg);
}


.regalo.abierto::after {

    transform:
        translateX(18px)
        translateY(-35px)
        rotate(25deg);
}


.regalo.abierto .luz {

    transform:
        translate(
            -50%,
            -50%
        )
        scale(2.8);
}


/* =========================
   TEXTO DEL REGALO
========================= */

#textoRegalo {

    min-height: 35px;

    font-size: 20px;

    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}


/* =========================
   BOTÓN FINAL
========================= */

#botonFinal {

    margin-top: 25px;

    opacity: 0;
}


/* =========================
   CORAZONES VOLADORES
========================= */

.corazon-volador {

    position: fixed;

    bottom: -50px;

    pointer-events: none;

    z-index: 20;

    animation:
        subirCorazon
        var(--duracion)
        linear
        forwards;
}


/* =========================
   ESTRELLAS
========================= */

.estrella {

    position: fixed;

    width: 4px;

    height: 4px;

    border-radius: 50%;

    background: white;

    pointer-events: none;

    z-index: 1;

    animation:
        brillar
        var(--duracion)
        ease-in-out
        infinite;
}


/* =========================
   FINAL
========================= */

.final h2 {

    margin-bottom: 10px;
}


.final h1 {

    margin-bottom: 35px;
}


.mensaje-final {

    font-size: 20px;

    line-height: 1.8;

    opacity: 0.9;

    margin-bottom: 20px;
}


.frase-final {

    margin-top: 45px;

    font-size: 22px;

    font-style: italic;

    opacity: 0.85;
}


/* =========================
   ANIMACIONES
========================= */

@keyframes latido {

    0%,
    100% {

        transform:
            scale(1);
    }

    50% {

        transform:
            scale(1.18);
    }
}


@keyframes respirarLuz {

    0%,
    100% {

        opacity: 0.6;

        transform:
            translate(
                -50%,
                -45%
            )
            scale(0.9);
    }

    50% {

        opacity: 1;

        transform:
            translate(
                -50%,
                -45%
            )
            scale(1.15);
    }
}


@keyframes subirCorazon {

    0% {

        transform:
            translateY(0)
            translateX(0)
            rotate(0deg)
            scale(0.6);

        opacity: 0;
    }

    10% {

        opacity: 1;
    }

    50% {

        transform:
            translateY(-50vh)
            translateX(var(--movimiento))
            rotate(20deg)
            scale(1);
    }

    100% {

        transform:
            translateY(-115vh)
            translateX(
                calc(
                    var(--movimiento) * -1
                )
            )
            rotate(-20deg)
            scale(0.7);

        opacity: 0;
    }
}


@keyframes brillar {

    0%,
    100% {

        opacity: 0.2;

        transform:
            scale(0.5);
    }

    50% {

        opacity: 1;

        transform:
            scale(1.5);
    }
}


/* =========================
   MÓVIL
========================= */

@media (max-width: 600px) {

    .pantalla {

        padding: 20px;
    }


    h1 {

        letter-spacing: 8px;
    }


    h2 {

        font-size: 45px;
    }


    .texto-carta {

        font-size: 17px;
    }


    .texto-historia {

        font-size: 17px;
    }


    .foto-placeholder {

        height: 220px;
    }


    .recuerdo h3 {

        font-size: 21px;
    }


    .frase {

        font-size: 19px;

        padding: 0 15px;
    }


    .frase5 {

        font-size: 22px;
    }


    .mensaje-final {

        font-size: 18px;
    }


    .regalo {

        transform:
            scale(0.9);
    }


    .regalo:hover {

        transform:
            translateY(-8px)
            scale(0.94);
    }

       }
