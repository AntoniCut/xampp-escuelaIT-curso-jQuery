/*
    -------------------------------------------
    ----------  /01-curso-jquery/  ------------
    ----------  /src/scripts/  ----------------
    ----------  /06-primeros-pasos/  ----------
    ----------  /02-ejemplo-2.js  -------------
    -------------------------------------------
*/



$(document).ready(function () {

    console.log('\n');
    console.warn('-----  02-ejemplo-2.js  --  $(document).ready()  -----');
    console.log('\n');


    const $parrafos = $(".main__section p");
    const $info1 = $("#info1");

    console.log('parrafos', $parrafos);
    //$info.append( $parrafos.html() );

    $parrafos.each(function (indice, elem) {

        //  -----  codigo para cada uno  -----
        console.log("\nhola - " + indice);

        elem = $(elem);
        console.log('Texto del párrafo ', (indice + 1), ' - ', elem.text());
        $info1.append(`<h3> Texto del párrafo ${(indice + 1)}, ${elem.text()} </h3>`);
    });


    let x = [1, 2, 3, "x"];

    console.log('\n');

    $(x).each(function (i, e) {
        console.log('posicion ', i, ' elemento ', e, ' del array x');
        $info1.append(`<h3> Posición ${i}, elemento ${e} del array x </h3>`);
    });

});



$(function () {

    console.log('\n');
    console.warn('-----  02-ejemplo-2.js  --  $(function() {} )  -----');
    console.log('\n');

    const $lis = $('.main__section li');
    const $info2 = $("#info2");

    // Primero modificamos el texto de todos los <li> a "hola"
    $lis.text("hola");

    // Luego recorremos los elementos
    $lis.each(recorreLi);

    function recorreLi(indice, elem) {

        console.log('elem', elem, ' - indice ', indice, ' - $(elem)', $(elem), ' - texto de li', $(elem).text());
        $info2.append(`<h3> elem ${$(elem).text()} - indice ${indice} - $(elem) ${$(elem).text()} - texto de li ${$(elem).text()} </h3>`);

        $(elem).css("color", "red");

        if ($(elem).text() == "dos") {
            $(elem).remove();
        }
    }
});
