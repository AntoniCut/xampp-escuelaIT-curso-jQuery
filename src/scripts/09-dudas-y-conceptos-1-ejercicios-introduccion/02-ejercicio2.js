/*
    -------------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -------------------------------------
    ----------  /src/scripts/  ----------------------------------------------------
    ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-jquery/  ----------
    ----------  /02-ejercicio2.js  ------------------------------------------------
    -------------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-ejercicio2.js  ----------');


    const arrayRGB = [
        "#FF8C00",
        "#FFD700",
        "#B8860B",
        "#F0E68C",
        "#FF4500",
        "#FF0000",
        "#FF7F50",
        "#FA8072",
        "#00FF00",
        "#00FA9A"
    ];


    $("li").each(function (index, elem) {

        $(elem).css("background-color", arrayRGB[index]);

    });
    
    

})(jQuery);
