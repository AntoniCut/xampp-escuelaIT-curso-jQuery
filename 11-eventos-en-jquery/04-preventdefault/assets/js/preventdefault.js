//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /04-preventdefault/  --------------------
//  ----------  /assets/js/preventdefault.js  -----------
//  -----------------------------------------------------



export const preventDefault = ($) => {

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

}
