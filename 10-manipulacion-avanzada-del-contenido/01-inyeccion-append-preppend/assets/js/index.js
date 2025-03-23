//  -----------------------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------------------
//  ----------  /10-mainipulacion-avanzada-del-contenido/  ----------
//  ----------  /01-inyeccion-append-prepend/  ----------------------
//  ----------  /assets/js/index.js  --------------------------------
//  -----------------------------------------------------------------


export const inyeccionAppendPreppend = ($) => {

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
       
}
