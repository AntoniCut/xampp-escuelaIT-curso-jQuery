/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /14-cola-de-efectos/  ------------------
    ----------  /02-ejemplo-stop.js  -------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  02-ejemplo-stop.js  ----------');

    //  -----  referencias al HTML  -----
    const $enlace = $('#enlace');
    const $tip = $('#tip');
    

    $enlace

        .on("mouseenter", function (e) {

            $tip
                .stop()
                .show(2000)
                .css({
                    top: (e.pageY + 10) + "px",
                    left: (e.pageX + 10) + "px"
                });
        })

        .on("mouseleave", function () {

            $tip
                .stop()
                .hide(2000);
        });

})(jQuery);
