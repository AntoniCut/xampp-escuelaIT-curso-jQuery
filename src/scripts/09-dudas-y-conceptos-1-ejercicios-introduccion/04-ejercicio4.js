/*
    -------------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -------------------------------------
    ----------  /src/scripts/  ----------------------------------------------------
    ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-jquery/  ----------
    ----------  /04-ejercicio4.js  ------------------------------------------------
    -------------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-ejercicio4.js  ----------');

    //let tam = 1;
            
    $("p").each(function(index, elem) {
                
        //$(elem).css("font-size", tam + "em");
        //tam += 0.25;

        let tamano = 1.6 + (index * 0.25);
        $(this).css("font-size", tamano + "rem");
        
    });
    
    
})(jQuery);
