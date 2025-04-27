/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /11-eventos/  --------------------------
    ----------  /01-metodo-on.js  ----------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  01-metodo-on.js  ----------');


    const $div = $(".div");

    $div.on("click", function () {

        //  -----  codigo a ejecutar cuando se produzca el click  -----

        let texto = "";

        const $elem = $(this);

        if ($elem.data("textoanterior"))
            texto = $elem.data("textoanterior");

        else
            texto = "hiciste clic"

        $elem.data("textoanterior", $elem.text());
        $elem.text(texto);

    });


})(jQuery);
