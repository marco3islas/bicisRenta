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