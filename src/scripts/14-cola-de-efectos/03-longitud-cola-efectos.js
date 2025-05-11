/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /14-cola-de-efectos/  ------------------
    ----------  /03-longitud-cola-efectos.js  ----------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  03-longitud-cola-efectos.js  ----------');

    //  -----  referencias al HTML  -----
    const $btnAnimar = $('#btnAnimar');
    const $texto = $('.texto');
    const $parrafo = $('.parrafo');

        
    $btnAnimar.on('click', function () {

        $texto

            .slideUp(4000)
            .slideDown(4000)
            
            .on('click', function () {
                
                $texto.finish();        //  equivalente a --  $(this).stop(true, true);
                console.log('colaTexto', colaTexto);
                $texto.text("Tienes " + colaTexto.length + " funciones encoladas");
            })

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)


        //  -----  funciones en la cola del div texto  -----
        const colaTexto = $texto.queue();
        console.log('colaTexto', colaTexto);
        $texto.text("Tienes " + colaTexto.length + " funciones encoladas");


        $parrafo

            .animate({
                fontSize: "2.4rem"
            }, 4000)

            .animate({
                fontSize: "1.2rem"
            }, 4000)

    })


})(jQuery);
