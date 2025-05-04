/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /13-efectos/  --------------------------
    ----------  /01-toggle.js  -------------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-toggle.js  ----------');

    //  -----  referencias al HTML  -----
    const $a = $('a');
    const $anim = $('#anim');


    $a.on("click", function (e) {

        e.preventDefault();
        
        const $enlace = $(this);

        $anim.slideToggle(4000, function () {
            
            const $capa = $(this);

            if ($capa.css("display") === "none") 
                $enlace.text("Mostrar");
           
            else 
                $enlace.text("Ocultar");
                        
        });
        
    });


})(jQuery);
