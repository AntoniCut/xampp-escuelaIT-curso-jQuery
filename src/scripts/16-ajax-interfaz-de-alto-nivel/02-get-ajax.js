/*
    --------------------------------------------------------
    ----------  xampp-escuela-it/  -------------------------
    ----------  01-curso-jquery//  -------------------------
    ----------  /src/scripts/  -----------------------------
    ----------  /16-ajax-interfaz-de-alto-nivel/  ----------
    ----------  /02-get-ajax.js  ---------------------------
    --------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-get-ajax.js  ----------');

    //  -----  referencias al HTML  -----
    const $enlace = $('#enlace');
    const $salida = $('#salida');


    $enlace.on('click', function (e) {

        e.preventDefault();

        $.get(

            '/01-curso-jquery/src/services/contenido-get-ajax.php',

            function (respuesta) {

                //  -----  Parsea la respuesta como HTML y busca el h3  -----
                const $html = $('<div>').html(respuesta);
                const $h3 = $html.find('h3');

                //  -----  Muestra solo el contenido del h3  -----
                $salida.html($h3);
                
            });

    });


})(jQuery);
