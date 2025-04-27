/*
    -------------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -------------------------------------
    ----------  /src/scripts/  ----------------------------------------------------
    ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-jquery/  ----------
    ----------  /01-ejercicio1.js  ------------------------------------------------
    -------------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-ejercicio1.js  ----------');

    $("p").each(function(index, elem) {

        //const parrafoActual = $(this);
        const parrafoActual = $(elem);
        parrafoActual.text("Parrafo " + (index + 1));
    });
    

})(jQuery);
