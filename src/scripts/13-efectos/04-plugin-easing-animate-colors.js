/*
    -----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -----------------
    ----------  /src/scripts/  --------------------------------
    ----------  /13-efectos/  ---------------------------------
    ----------  /04-plugin-easing-animate-colors.js  ----------
    -----------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-plugin-easing-animate-colors.js  ----------');

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

            width: "50rem",
            padding: "20rem",
            //backgroundColor: "#f66"
            backgroundColor: "#933",
			color: "#666",

        }, 10000, easingValue, function () {

            $capa
                .css(originalStyles)
                .text('Esto se va a animar con los plugings Easing + Animate Colors');

            alert('Terminó!!!');

        });

    });


}) (jQuery);
