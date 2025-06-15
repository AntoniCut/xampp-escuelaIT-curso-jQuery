/*
    --------------------------------------------------------
    ----------  xampp-escuela-it/  -------------------------
    ----------  01-curso-jquery//  -------------------------
    ----------  /src/scripts/  -----------------------------
    ----------  /16-ajax-interfaz-de-alto-nivel/  ----------
    ----------  /03-get-ajax-datos.js  ---------------------
    --------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  03-get-ajax-datos.js  ----------');

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

        $.get(

            '/01-curso-jquery/src/services/contenido-get-ajax-dato.php',

            myJSON,

            function (respuesta) {

                //  -----  Parsea la respuesta como HTML y busca el h3  -----
                const $html = $('<div>').html(respuesta);
                const $h3 = $html.find('h3');

                //  -----  Muestra solo el contenido del h3  -----
                $salida.html($h3);

            }
        );

    });


    //  -----  cuando se lanza la primera petición AJAX  -----
    $(document).ajaxStart(function () {

        console.log("start");

        $cargando.css("display", "block");
        $salida.css("display", "none");

    });


    //  -----  cuando se esta enviando la información  -----
    $(document).ajaxSend(function () {
        
        console.log("Send");

        $cargando.css("display", "block");
        $salida.css("display", "none");
    });
    

    //  -----  cuando la información se completa con éxito  -----
    $(document).ajaxSuccess(function () {

        console.log("success");

        $cargando.css("display", "none");
        $salida.css("display", "block");

    });


    //  -----  cuando há ocurrido un error  -----
    $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
        
        console.log("🚨 AJAX Error detectado");
        console.log("URL fallida:", settings.url);
        console.log("Status HTTP:", jqxhr.status);
        console.log("Respuesta del servidor:", jqxhr.responseText);
        console.log("Error lanzado:", thrownError);

        $salida.css("display", "block");
        $salida.html('<h3 class="info error"> ⚠️ ERROR CARGANDO DATOS </h3>');
        $cargando.css("display", "none");

    });


    //  -----  cuando la información se completa haya o no ocurrido un error  -----
    $(document).ajaxComplete(function () {
        console.log("Respuesta completada!!!");
    });
  


})(jQuery);
