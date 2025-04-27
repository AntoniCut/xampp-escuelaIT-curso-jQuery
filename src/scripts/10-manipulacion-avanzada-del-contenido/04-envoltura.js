/*
    ----------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------------
    ----------  /src/scripts/  -------------------------------------
    ----------  /10-manipulacion-avanzada-del-contenido/  ----------
    ----------  /04-envoltura.js  ----------------------------------
    ----------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-envoltura.js  ----------');


    $(".x")
        .wrap("<article> </article>");

    $("article")
        .wrap("<section> </section>");


    $("b")
        .unwrap()
        .unwrap();

   

})(jQuery);
