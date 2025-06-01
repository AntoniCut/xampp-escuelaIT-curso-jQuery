/*
    -------------------------------------------
    ----------  /01-curso-jquery/  ------------
    ----------  /src/scripts/  ----------------
    ----------  /06-primeros-pasos/  ----------
    ----------  /01-ejemplo-1.js  -------------
    -------------------------------------------
*/


$(document).ready(function () {


    console.log('\n');
    console.warn('-----  01-ejemplo-1.js  --  1º Ready  -----');
    console.log('\n');

    $(".miclase").hide(2000);

    //let caja = $("<div class='h'>texto<p>parrafo</p><b>negrita</b></div>").appendTo("body");
    const $caja = $("<div class='h'> texto <p> parrafo </p> <b> negrita </b> </div>").appendTo("#algo");
    $caja.css("color", "red");

});



$(document).ready(mostrar);

function mostrar() {


    console.log('\n');
    console.warn('-----  01-ejemplo-1.js  --  2º Ready  -----');
    console.log('\n');

    $("p").show(2000);

    // return function() {
    //     $("p").show(10000);
    // }
}
