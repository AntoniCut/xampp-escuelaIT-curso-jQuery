/*
    --------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  --------------
    ----------  /src/scripts/  -----------------------------
    ----------  /14-cola-de-efectos/  ----------------------
    ----------  /05-encolado-respuesta-evento.js  ----------
    --------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  05-encolado-respuesta-evento.js  ----------');

    //  -----  referencias al HTML  -----
    const $texto = $('.texto');


    //  -----  función que crea un animate para el borde  -----
    function miAnimacion(elem) {
        
        console.log(elem);
        
        $(elem).animate({
            borderWidth: "2rem",
            fontSize: '1.6rem'
        }, 2000, function() {
            $(this).css('color', 'blue')
        });
    }


    //  -----  click en el div texto  -----
    $texto.on('click', function () {

        //  -----  cola de efectos  -----
        $texto

            .slideUp(2000)                      //  -----  Efecto 1  -----
            .delay(4000)                        //  -----  Efecto 2  -----
            .slideDown(2000)                    //  -----  Efecto 3  -----

            .queue(function (sig) {             //  -----  Efecto 4  -----
                miAnimacion(this);              //  -----  se guarda en la cola, se ejecuta al finar  -----
                sig();
            })

            .queue(function () {                //  -----  Efecto 5  -----  
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

            .animate({                          //  -----  Efecto 6  -----
                fontSize: "2.4rem"
            }, 2000)

            .queue(function (siguiente) {       //  -----  Efecto 7  -----
                $(this).css("color", "#fff");
                siguiente();
            })

            .animate({                          //  -----  Efecto 8  -----
                fontSize: "1.2rem"
            }, 2000)


        //  -----  funciones en la cola del div texto  -----
        $texto.text("Tienes encoladas " + $texto.queue().length + " funciones...");

    })


})(jQuery);
