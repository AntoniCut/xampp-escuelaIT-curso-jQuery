/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /14-cola-de-efectos/  ------------------
    ----------  /06-animaciones-en-bucle.js  -----------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  06-animaciones-en-bucle.js  ----------');

    //  -----  referencias al HTML  -----
    const $btnAnimar = $('#btnAnimar');
    const $btnStop = $('#btnStop');
    const $capa = $("#capa");


    //  -----  función donde se encadenan todos los efectos  -----
    function moverBucle() {

        //  -----  tamaño de la ventana y del elemento  -----
        const $elem = $capa;
        const tamVentana = $(window).width();
        const tamElemento = $elem.width();

       
        $elem

            .animate({
                left: (tamVentana - tamElemento - 50) + "px"
            }, 2000)            //  -----  animación para llegar al final  -----

            .fadeOut()          //  -----  ocultamos elemento  -----
            .delay(1000)        //  -----  1 seg de espera  -----
            .fadeIn()           //  -----  mostramos elemento  -----

            .animate({
                left: "30px"
            }, 2000)            //  -----  animación para llegar al principio  -----

            .fadeOut()          //  -----  ocultamos elemento  -----
            .delay(1000)        //  -----  1 seg de espera  -----

            
            .queue(function (sig) {     //  -----  efecto de animación en bucle  -----

                if ($elem.data("vueltas"))
                    $elem.data("vueltas", $elem.data("vueltas") + 1);

                else
                    $elem.data("vueltas", 1);

                $elem.text($elem.data("vueltas"));

                //  -----  volvemos a ejecutar la funcion de efectos  -----
                //  -----  asi conseguimos un bucle  ----------------------
                moverBucle();
                sig();
                //$(this).dequeue();
            })

            .fadeIn();          //  -----  mostramos elemento  -----

    }

    
    //  -----  click en el botón animar  -----
    $btnAnimar.on('click', moverBucle);


    //  -----  click en el botón stop  -----
    $btnStop.on('click', function () {

        $capa
            .stop(true, false)
            .fadeOut(2000);
    })


})(jQuery);
