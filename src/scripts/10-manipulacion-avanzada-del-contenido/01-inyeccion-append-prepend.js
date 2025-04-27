/*
    ----------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------------
    ----------  /src/scripts/  -------------------------------------
    ----------  /10-manipulacion-avanzada-del-contenido/  ----------
    ----------  /01-inyeccion-append-prepend.js  -------------------
    ----------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-inyeccion-append-prepend.js  ----------');


    $("#div1, #div2").css("background-color", "rgb(204, 211, 226)");

    $("<p class='p1'> texto del párrafo lo añadimos con appendTo a la division </p>")
        .appendTo("#div1")
        .css("background-color", "#ccc");
    
    $("<b> Negrita </b> , añadimos con prependTo a la division <br> <br>")
        .prependTo("#div1");

    $("#div2")
        .append("<br> <br> <i> Italica </i>, añadimos con append a la division");

    $("#div2")
        .prepend("<i> principio </i>, añadimos con prepend a la division <br> <br>");

   

})(jQuery);
