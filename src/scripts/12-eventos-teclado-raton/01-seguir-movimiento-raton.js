/*
    ------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ------------
    ----------  /src/scripts/  ---------------------------
    ----------  /12-eventos-teclado-raton/  --------------
    ----------  /01-seguir-movimiento-raton.js  ----------
    ------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-seguir-movimiento-raton.js  ----------');


    const $document = $(document);
    
    $document.mousemove(function (evento) {

        const $capa = $("#moverse");

        $capa.css({
            top: evento.pageY + "px",
            left: evento.pageX + "px",
        });

    });


})(jQuery);
