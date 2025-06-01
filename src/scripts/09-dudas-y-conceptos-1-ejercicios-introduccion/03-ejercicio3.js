/*
    -------------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -------------------------------------
    ----------  /src/scripts/  ----------------------------------------------------
    ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-jquery/  ----------
    ----------  /03-ejercicio3.js  ------------------------------------------------
    -------------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  03-ejercicio3.js  ----------');

    
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


    $(".contenido li").each(function (index, elem) {

        //  -----  operador % --> resto de la división: 4 % 3 = 1,  23 % 5 = 3  -----
        const i = index % arrayRGB.length;
        $(elem).css("background-color", arrayRGB[i]);

    });
    
    
})(jQuery);
