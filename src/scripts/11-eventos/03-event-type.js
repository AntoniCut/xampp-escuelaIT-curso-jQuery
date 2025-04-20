//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /03-event-type/  ------------------------
//  ----------  /assets/js/event-type.js  ---------------
//  -----------------------------------------------------



export const eventType = ($) => {

    //  -----  referencias al HTML  -----
    const $enlace = $(".enlace");
    

    $enlace.on("click dblclick mouseenter mouseleave focus blur", gestionaVariosEventos);


    function gestionaVariosEventos(event) {
        $(this).text(event.type);
    }

}
