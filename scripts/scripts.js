$(function() {
    /* animacion registro */
    $('.signIn').on('click', function() {
        $('.formIngreso').fadeToggle();
    });

    /* animacion navbar */
    $('#menu-movil').on('click', function() {
        $('.navbar').slideToggle();
    });



    /* Evento mostrar menus porque rentar */

    $('.ventajas .infoServicio:first').show();
    $('.menuCaracteristicas a:first').addClass('activo');

    $('.menuCaracteristicas a').on('click', function() {
        $('.menuCaracteristicas a').removeClass('activo');
        $(this).addClass('activo');
        $('.infoServicio').hide();

        /*Cereando la variable del link*/
        var enlace = $(this).attr('href');
        console.log(enlace);
        $(enlace).fadeIn(300);

        return false;
    });

    $('.contador').on('mouseenter', function() {


        $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 500 }, 1200);
        $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 3000 }, 1500);
        $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 800 }, 1800);
        $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 24 }, 1200);
    });

});
/* **************************seccion registro y pago******************* */



$(function() {
    /* datos usuario */

    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    /* Paquetes */
    var paqueteBasico = document.getElementById('paqueteBasico');
    var paquetePremium = document.getElementById('paquetePremium');
    var paqueteStandard = document.getElementById('paqueteStandard');

    /*Botones y Divs*/

    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('errorDiv');
    var felizCompra = document.getElementById('felizCompra');
    var enviar = document.getElementById('enviar');
    var botonRegistro = document.getElementById('btnRegistro');
    var listaProductos = document.getElementById('listaProductos');
    var sumaTotal = document.getElementById('suma-total');

    /* Complementos */
    var botellaAgua = document.getElementById('botellaAgua');
    var playeraBicis = document.getElementById('playeraBicis');
    var gafasBicis = document.getElementById('gafasBicis');

    if (calcular) {

        calcular.addEventListener('click', calcularMontos);

    }

    /*Validar campos*/

    function validarCampos() {
        if (this.value == '') {
            errorDiv.style.display = 'block';

            errorDiv.innerHTML = "Este campo es obligatorio *";
            this.style.border = '2px solid rgb(202, 29, 29)';
        } else {

            errorDiv.style.display = 'none';
            this.style.border = '1px solid #17ca4d';
        }
    }

    if (nombre) {
        nombre.addEventListener('blur', validarCampos);
    }
    if (email) {
        email.addEventListener('blur', validarEmail);
    }

    function validarEmail() {
        if (this.value.indexOf("@") > -1) {
            this.style.border = '1px solid #17ca4d';
        } else {
            errorDiv.style.display = 'block';
            errorDiv.innerHTML = 'El email debe ser del tipo "pacoPerez@tucorreo.com" ';
            this.style.border = '2px solid rgb(202, 29, 29)';
        }
    }

    if (password) {
        password.addEventListener('blur', validarCampos);
    }




    function calcularMontos(event) {
        event.preventDefault();

        paqueteBasico = parseInt(paqueteBasico.value, 10) || 0,
            paqueteStandard = parseInt(paqueteStandard.value, 10) || 0,
            paquetePremium = parseInt(paquetePremium.value, 10) || 0,
            botellaAgua = parseInt(botellaAgua.value, 10) || 0,
            gafasBicis = parseInt(gafasBicis.value, 10) || 0,
            playeraBicis = parseInt(playeraBicis.value, 10) || 0;

        var totalPagar = (paqueteBasico * 50) + (paqueteStandard * 100) + (paquetePremium * 300) +
            (botellaAgua * 80) + (playeraBicis * 140) + (gafasBicis * 250);

        var listadoProductos = [];

        if (paqueteBasico >= 1) {
            listadoProductos.push(paqueteBasico + ' Paquetes básico');
        }
        if (paqueteStandard >= 1) {
            listadoProductos.push(paqueteStandard + ' Paquetes standard');
        }
        if (paquetePremium >= 1) {
            listadoProductos.push(paquetePremium + ' Paquetes premium');
        }

        if (botellaAgua >= 1) {
            listadoProductos.push(botellaAgua + ' Botellas para agua');
        }

        if (playeraBicis >= 1) {
            listadoProductos.push(playeraBicis + ' Playeras');
        }

        if (gafasBicis >= 1) {
            listadoProductos.push(gafasBicis + ' Gafas de bicis');
        }

        listaProductos.style.display = "block";
        listaProductos.innerHTML = '';

        for (var i = 0; i < listadoProductos.length; i++) {
            listaProductos.innerHTML += listadoProductos[i] + '<br />';
        }

        sumaTotal.innerHTML = "$" + totalPagar.toFixed(2);



    }
});
//
// ─── MENU FIJO ──────────────────────────────────────────────────────────────────
//    

$(function() {

    var windowHeight = $(window).height();

    var barraAltura = $('.barra').innerHeight();


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > windowHeight) {
            $('.barra').addClass('sticky');
            $('body').css({ 'margin-top': barraAltura + 'px' });
        } else {
            $('.barra').removeClass('sticky');
            $('body').css({
                'margin-top': 0 + 'px'
            });
        }
    });


});