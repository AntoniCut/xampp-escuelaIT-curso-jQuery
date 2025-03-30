//  ---------------------------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  --------------
//  ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-a-jquery/  ----------  
//  ----------  /01-ejercicio-1/  ---------------------------------------------------  
//  ----------  /assets/js/01-ejercicio-1.js  ---------------------------------------
//  --------------------------------------------------------------------------------- 


export const ejercicio1 = ($) => {

    $("p").each(function(index, elem) {

        //const parrafoActual = $(this);
        const parrafoActual = $(elem);
        parrafoActual.text("Parrafo " + (index + 1));
    });
       
}
