/*  
    -------------------------------------------------------------------
    ----------  /curso-jquery-escuela-it.com/  ------------------------
    ----------  /12-eventos-de-teclado-y-raton/  ----------------------
    ----------  /02-menu-contextual-personalizado/  -------------------
    ----------  /assets/js/menu-contextual-personalizado.js  ----------
    -------------------------------------------------------------------  
*/


export const menuContextualPersonalizado = ($) => {

    const $document = $(document);
    const $info = $("#info");
    
    let retardo;

    $document.on("contextmenu", function (e) {
        
        e.preventDefault();
        
        const $menu = $("#menu");
        
        $menu.css({
            "display": "block",
            "top": e.pageY + "px",
            "left": e.pageX + "px"
        });
        
        retardo = setTimeout(function () {
            $menu.css({
                "display": "none"
            });
        }, 2000);

    });


    $document.on("mousedown", function (e) {
         
        console.log('Haz pulsado el boton ' + e.which + ' del mouse');
        $info.text('Haz pulsado el boton ' + e.which + ' del mouse');

        clearTimeout(retardo);

    });

}
