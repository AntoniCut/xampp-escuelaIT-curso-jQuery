/*  
    -------------------------------------------------------------
    ----------  /curso-jquery-escuela-it.com/  ------------------
    ----------  /12-eventos-de-teclado-y-raton/  ----------------
    ----------  /01-seguir-movimiento-raton/  -------------------
    ----------  /assets/js/seguir-movimiento-raton.js  ----------
    -------------------------------------------------------------  
*/



export const seguirMovimientoRaton = ($) => {

    const $document = $(document);
    
    $document.mousemove(function (evento) {

        const $capa = $("#moverse");

        $capa.css({
            top: evento.pageY + "px",
            left: evento.pageX + "px",
        });

    });

}
