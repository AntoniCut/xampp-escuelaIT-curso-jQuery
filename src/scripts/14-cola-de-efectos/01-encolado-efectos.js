/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /14-cola-de-efectos/  ------------------
    ----------  /01-encolado-efectos.js  ---------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-encolado-efectos.js  ----------');

    //  -----  referencias al HTML  -----
    const $btnAnimar = $('#btnAnimar');
    const $texto = $('.texto');
    const $parrafo = $('.parrafo');
    
    $btnAnimar.on('click', function () {

        $texto

            .slideUp(4000)

            .slideDown(4000)

            //.fadeOut(4000)
            //.fadeIn(4000)

            .on('click', function () {
                //$(this).stop();
                $texto.finish();        //  equivalente a --  $(this).stop(true, true);
            })

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

        $parrafo

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

    })


})(jQuery);
