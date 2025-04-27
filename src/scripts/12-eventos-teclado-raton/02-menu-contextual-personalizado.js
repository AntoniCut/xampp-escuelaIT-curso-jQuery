/*
    ------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ------------------
    ----------  /src/scripts/  ---------------------------------
    ----------  /12-eventos-teclado-raton/  --------------------
    ----------  /02-menu-contextual-personalizado.js  ----------
    ------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-menu-contextual-personalizado.js  ----------');


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


})(jQuery);
