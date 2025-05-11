/*
    -----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -----------------
    ----------  /src/scripts/  --------------------------------
    ----------  /14-cola-de-efectos/  -------------------------
    ----------  /04-encolar-funciones-no-efectos.js  ----------
    -----------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-encolar-funciones-no-efecto.js  ----------');

    //  -----  referencias al HTML  -----
    const $btnAnimar = $('#btnAnimar');
    const $texto = $('.texto');


    $btnAnimar.on('click', function () {


        //  -----  cola de efectos  -----
        $texto

            .slideUp(4000)                      //  -----  Efecto 1  -----
            .slideDown(4000)                    //  -----  Efecto 2  -----

            .queue(function () {                //  -----  Efecto 3  -----  
                //  -----  para encolar métodos que no son efectos  -----
                $(this)
                    .css({
                        color: 'blue',
                        backgroundColor: "#9f9"
                    })
                    .text('cambiamos el texto y el color de fondo')
                    .dequeue();                 //  -----  desencolamos para que no se paran  ----- 
                                                //  -----  el resto de animaciones o efectos  -----
            })

            .animate({                          //  -----  Efecto 4  -----
                fontSize: "2.4rem"
            }, 4000)

            .queue(function (siguiente) {       //  -----  Efecto 5  -----
                $(this).css("color", "#fff");
                siguiente();
            })

            .animate({                          //  -----  Efecto 6  -----
                fontSize: "1.2rem"
            }, 4000)


            //  -----  pulsar click en el div texto  -----
            .on('click', function () {

                $texto.finish();        //  equivalente a --  $(this).stop(true, true);
                console.log('colaTexto', colaTexto);
                
                $texto.text("Tienes " + colaTexto.length + " funciones encoladas")
                $(this).dequeue();
            })

        //  -----  funciones en la cola del div texto  -----
        const colaTexto = $texto.queue();
        console.log('colaTexto', colaTexto);
        $texto.text("Tienes " + colaTexto.length + " funciones encoladas");

    })


})(jQuery);
