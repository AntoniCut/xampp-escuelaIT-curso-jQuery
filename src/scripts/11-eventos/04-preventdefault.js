/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /11-eventos/  --------------------------
    ----------  /04-preventdefault.js  -----------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-preventdefault.js  ----------');


    //  -----  referencias al HTML  -----
    const $enlace1 = $(".enlace1");
    const $enlace2 = $(".enlace2");

    $enlace1.click(function () {

        $(this).css("color", "blue");
        
    });


    $enlace2.click(function (event) {

        //  -----  previene el comportamiento por defecto  -----
        event.preventDefault();

        alert("Previene el comportamiento por defecto")
        $(this).css("color", "blue");

        //  -----  previene el comportamiento por defecto tambien,  ----- 
        //  -----  y evita la propagación del evento  -------------------
        //return false; 
    });



})(jQuery);
