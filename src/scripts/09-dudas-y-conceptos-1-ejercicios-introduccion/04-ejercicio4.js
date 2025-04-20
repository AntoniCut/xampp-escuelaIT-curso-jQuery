//  ---------------------------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  --------------
//  ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-a-jquery/  ----------  
//  ----------  /04-ejercicio-4/  ---------------------------------------------------  
//  ----------  /assets/js/04-ejercicio-4.js  ---------------------------------------
//  --------------------------------------------------------------------------------- 


export const ejercicio4 = ($) => {

    //let tam = 1;
            
    $("p").each(function(index, elem) {
                
        //$(elem).css("font-size", tam + "em");
        //tam += 0.25;

        let tamano = 1.6 + (index * 0.25);
        $(this).css("font-size", tamano + "rem");
        
    });
       
}
