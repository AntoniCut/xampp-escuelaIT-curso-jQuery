/*
    ----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------
    ----------  /src/scripts/  -------------------------------
    ----------  /07-manipulacion-basica-elementos/  ----------
    ----------  /04-recorrer-elementos-each.js  --------------
    ----------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  04-recorrer-elementos-each.js  ----------');


    //  ------  referencias al HTML  -----
    const $parrafosProbando = $("p.probando");
    const $totalParrafos = $("p");
    const $info = $("#info");

    //  -----  averiguar el número de elementos seleccionados en un obj jQuery  -----
    console.log('\nNº de parrafosProbando: ', $parrafosProbando.size());
    $info.append(`<h3> Nº de Párrafos con la clase probando </h3> ${$parrafosProbando.size()} `);

    console.log('Nº total de párrafos: ', $totalParrafos.length);
    $info.append(`<h3> Nº total de Párrafos </h3> ${$totalParrafos.length} `);


    //  -----  numero de elementos que tengo en $parrafosProbando  -----
    let numParrafosProbando = $parrafosProbando.size();

    //  -----  cadena para obtener este listado de textos  -----
    let listadoComas = "";

    //  -----  bucle each para reccorrer esos párrafos y guardarse los textos  -----
    $parrafosProbando.each(function (id, elem) {

        listadoComas += $(elem).text();

        //  -----  compruemo si quedan párrafos  -----
        if (id < (numParrafosProbando - 1)) {
            listadoComas += ", "
        }
    });

    console.log('\n', listadoComas);
    $info.append(`<h3> Párrafos con la clase probando son el </h3> ${listadoComas} `);



})(jQuery);



