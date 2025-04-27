/*
    ----------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------------
    ----------  /src/scripts/  -------------------------------------
    ----------  /10-manipulacion-avanzada-del-contenido/  ----------
    ----------  /02-inyeccion-after-before.js  ---------------------
    ----------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-inyeccion-after-before.js  ----------');


    $("#div1, #div2").css("background-color", "rgb(166, 191, 228)");

    $("<div> <b> negrita </b>, insertamos antes de mi division </div>")
        .insertBefore("#div1");

    $("<div> Insertamos <b> después </b> de mi division </div>")
        .insertAfter("#div1");

    $("#div2")
        .after("<p> hola despues </p>");

    $("#div2")
        .before("<p> hola antes </p>");

   

})(jQuery);
