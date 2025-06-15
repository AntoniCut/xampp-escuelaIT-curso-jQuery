/*
    --------------------------------------------------------
    ----------  xampp-escuela-it/  -------------------------
    ----------  01-curso-jquery//  -------------------------
    ----------  /src/scripts/  -----------------------------
    ----------  /16-ajax-interfaz-de-alto-nivel/  ----------
    ----------  /01-load.js  -------------------------------
    --------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-load.js  ----------');

    //  -----  referencias al HTML  -----
    const $btnLoad = $('#btnLoad');
    const $capaInfo = $('#capaInfo');


    $btnLoad.on('click', function () {
        
        $capaInfo.load(
            
            '/01-curso-jquery/src/services/contenido-load.php', 
            
            function () {
                alert("Información cargada");
            });
    });


})(jQuery);
