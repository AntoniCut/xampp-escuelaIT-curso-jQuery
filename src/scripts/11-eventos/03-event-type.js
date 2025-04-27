/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /11-eventos/  --------------------------
    ----------  /03-event-type.js  ---------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-metodo-on.js  ----------');


        //  -----  referencias al HTML  -----
        const $enlace = $(".enlace");
    

        $enlace.on("click dblclick mouseenter mouseleave focus blur", gestionaVariosEventos);
    
    
        function gestionaVariosEventos(event) {
            $(this).text(event.type);
        }


})(jQuery);
