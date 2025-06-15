/*
    ---------------------------------------------------------
    ----------  xampp-escuela-it/  --------------------------
    ----------  01-curso-jquery//  --------------------------
    ----------  /src/scripts/  ------------------------------
    ----------  /16-ajax-interfaz-de-alto-nivel/  -----------
    ----------  /04-get-ajax-datos-objeto-ajax.js  ----------
    ---------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-get-ajax-datos-objeto-ajax.js  ----------');

    //  -----  referencias al HTML  -----
    const $enlace = $('#enlace');
    const $salida = $('#salida');
    const $cargando = $('#cargando');

    
    //  -----  Variables  -----

    const nombrePersona = 'Ivan';
    const apellidoPersona = 'Martin';

    const myJSON = {
        nombre: nombrePersona,
        apellido: apellidoPersona
    }


    $enlace.on('click', function (e) {

        e.preventDefault();

        $cargando.css("display", "block");
        $salida.css("display", "none");


        const objetoAjax = $.get(

            '/01-curso-jquery/src/services/contenido-get-ajax-dato.php',

            myJSON
        );


        //  -----  cuando la petición se ejecuta correctamente  -----
        objetoAjax.done(function (respuesta) {

            console.log('done');
            
            $cargando.css("display", "none");
            $salida.css("display", "block");

            //  -----  Parsea la respuesta como HTML y busca el h3  -----
            const $html = $('<div>').html(respuesta);
            const $h3 = $html.find('h3');

            //  -----  Muestra solo el contenido del h3  -----
            $salida.html($h3);

        });

        
        //  -----  cuando se produce un error en la petición  -----
        objetoAjax.fail(function () {

            console.log("🚨 Fail - AJAX Error detectado");
            
            $salida.css("display", "block");
            $salida.html('<h3 class="info error"> ⚠️ ERROR CARGANDO DATOS </h3>');
            $cargando.css("display", "none");

        });


        //  -----  cuando la petición se ejecuta con o sin error  -----
        objetoAjax.always(function () {

            console.log('always');
            $cargando.css("display", "none");
        });

    });



})(jQuery);
