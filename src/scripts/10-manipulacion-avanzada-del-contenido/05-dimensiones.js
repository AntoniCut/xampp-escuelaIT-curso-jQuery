/*
    ----------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------------
    ----------  /src/scripts/  -------------------------------------
    ----------  /10-manipulacion-avanzada-del-contenido/  ----------
    ----------  /05-dimensiones.js  --------------------------------
    ----------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  05-dimensiones.js  ----------');


    const $capa = $(".capa");
    const $btnWidth = $("#btnWidth");
    const $btnHeight = $("#btnHeight");
    const $btnInnerWidth = $("#btnInnerWidth");
    const $btnInnerHeight = $("#btnInnerHeight");
    const $btnOuterWidth = $("#btnOuterWidth");
    const $btnOuterHeight = $("#btnOuterHeight");


    $btnWidth.click(function () {
        $capa.width("10%");
        alert('width: ' + $capa.width());
    });

    $btnHeight.click(function () {
        $capa.height("300px");
        alert('Height: ' + $capa.height());
    });

    $btnInnerWidth.click(function () {
        $capa.innerWidth();
        alert('innerWidth: ' + $capa.innerWidth());
    });

    $btnInnerHeight.click(function () {
        $capa.innerHeight();
        alert('innerHeight: ' + $capa.innerHeight());
    });

    $btnOuterWidth.click(function () {
        $capa.outerWidth();
        alert('outerWidth - true: ' + $capa.outerWidth(true));
    });

    $btnOuterHeight.click(function () {
        $capa.outerHeight();
        alert('outerHeight - false: ' + $capa.outerHeight(false));
    });


})(jQuery);
