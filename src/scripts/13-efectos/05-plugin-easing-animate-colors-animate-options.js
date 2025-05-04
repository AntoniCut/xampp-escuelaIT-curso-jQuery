/*
    ---------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ---------------------------------
    ----------  /src/scripts/  ------------------------------------------------
    ----------  /13-efectos/  -------------------------------------------------
    ----------  /04-plugin-easing-animate-colors-animate-options.js  ----------
    ---------------------------------------------------------------------------
*/

/*
    1 - Animaciones son decoración
        CSS (quien no lo vea que se actualice).
    
    2 - Animaciones son obligadas (cliente, funcionalidad)
        css
        fallback -> jQuery
    
    3 - Animaciones son respuesta a acciones del usuario "complejas", depende del estado de 
        otros elementos JavaScript para poder detectar comportamientos y estados (8)jQuery).
            -> Optimizar con CSS
            -> Comodidad jQuery solamente
*/

(function ($) {

    console.log('\n');
    console.warn('----------  04-plugin-easing-animate-colors-animate-options.js  ----------');

    //  -----  referencias al HTML  -----
    const $a = $('a');
    const $capa = $('#capa');
    const $easingSelect = $('#easingSelect');


    //  -----  Estilos iniciales de mi capa  -----
    const originalStyles = {
        width: $capa.css('width'),
        height: $capa.css('height'),
        marginTop: $capa.css('margin-top'),
        padding: $capa.css('padding'),
        display: $capa.css('display'),
        justifyContent: $capa.css('justify-content'),
        alignItems: $capa.css('align-items'),
        color: $capa.css('color'),
        backgroundColor: $capa.css('background-color')
    };


    //  -------------------------------------
    //  ----------  jQuery Easing  ----------
    //  -------------------------------------

    //  ----------  Easing  -------------------------------------------------------------------------------------------------
    //  -----  linear           swing            easeInQuad          easeOutQuad     easeInOutQuad                      -----
    //  -----  easeInCubic      easeOutCubic     easeInOutCubic      easeInQuart     easeOutQuart      easeInOutQuart   -----  
    //  -----  easeInSine       easeOutSine      easeInOutSine       easeInExpo      easeOutExpo       easeInOutExpo    -----
    //  -----  easeInQuint      easeOutQuint     easeInOutQuint      easeInCirc      easeOutCirc       easeInOutCirc    -----
    //  -----  easeInElastic    easeOutElastic   easeInOutElastic    easeInBack      easeOutBack       easeInOutBack    -----
    //  -----  easeInBounce     easeInOutBounce  easeOutBounce                                                          -----                                                                                  -----
    //-----------------------------------------------------------------------------------------------------------------------


    $a.on("click", function (e) {

        e.preventDefault();

        const easingValue = $easingSelect.val();
        console.log(easingValue);

        $capa.text(easingValue);

        $capa.animate({

            width: 0,
            padding: 0,
            backgroundColor: "#933",
			color: "#666",

        }, {
           
            duration: 10000,
            
            complete: function () {
                
                $capa
                    .css(originalStyles)
                    .text('Esto se va a animar con el pluging Easing + animate colors + opciones de animate');
                
                alert('Terminó!!!');
            },
            
            step: function() {
                $capa.text( $capa.width() );
            },
            
            easing: easingValue
        }) 
        
                
    });


}) (jQuery);
