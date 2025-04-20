//  ---------------------------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  --------------
//  ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-a-jquery/  ----------  
//  ----------  /01-ejercicio-1/  ---------------------------------------------------  
//  ----------  /assets/js/03-ejercicio-3.js  ---------------------------------------
//  --------------------------------------------------------------------------------- 


export const ejercicio3 = ($) => {

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

        //  -----  operador % --> resto de la división: 4 % 3 = 1,  23 % 5 = 3  -----
        const i = index % arrayRGB.length;
        $(elem).css("background-color", arrayRGB[i]);

    });

}
