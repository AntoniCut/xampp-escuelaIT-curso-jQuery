/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /13-efectos/  --------------------------
    ----------  /02-animate.js  ------------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-animate.js  ----------');

    //  -----  referencias al HTML  -----
    const $form = $('form');
    const $tamTexto = $('#tamTexto');
    const $tamCaja = $('#tamCaja');
    const $padding = $('#padding');


    $form.on("submit", function (e) {
        
        e.preventDefault();

        const $cajaForm = $(this);
        
        const tamTexto = $tamTexto.val();
        const tamCaja = $tamCaja.val();
        const padding = $padding.val();

        $cajaForm.animate({
            
            fontSize: tamTexto,
            width: tamCaja,
            padding: padding

        }, 4000, function() {
            
            $cajaForm.fadeOut(5000);
            alert('Termino la animación!!!');

        });
                
    });


})(jQuery);
