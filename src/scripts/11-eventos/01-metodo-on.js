//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /01-metodo-on/  -------------------------
//  ----------  /assets/js/metodo-on.js  ----------------
//  -----------------------------------------------------



export const metodoOn = ($) => {

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

}
