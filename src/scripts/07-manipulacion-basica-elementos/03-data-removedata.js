/*
    ----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------
    ----------  /src/scripts/  -------------------------------
    ----------  /07-manipulacion-basica-elementos/  ----------
    ----------  /03-data-removedata.js  ----------------------
    ----------------------------------------------------------
*/


(function ($) {

    console.warn('----------  03-data-remove-data.js  ----------');

    const $capa = $('#capa');
    //const $acumula = $('#acumula');
    const $infoCapa = $('#infoCapa');
    const $infoAcumula = $('#infoAcumula');

    // Establecemos y eliminamos datos
    $capa.data('dato', '1234').removeData('usuario');

    // Mostramos datos iniciales de #capa
    $infoCapa.append(`<h3>usuario: ${$capa.data('usuario') ?? 'undefined'}</h3>`);
    $infoCapa.append(`<h3>dato: ${$capa.data('dato')}</h3><br>`);

    // Evento click para ambos divs
    $('#capa, #acumula').on('click', function () {
        
        const $div = $(this);
        const id = $div.attr('id');
        const $info = id === 'capa' ? $infoCapa : $infoAcumula;

        let clics = $div.data('numclics') || 0;
        clics++;

        if (clics === 10) {
            $div.removeData('numclics');
        } else {
            $div.data('numclics', clics);
        }

        console.log(`Clic #${clics} en div: #${id}`);

        const html = `
            <h3 class="texto-info">Nº de clicks: ${clics}, en el div: ${id}</h3>
            <h3 class="texto-info">Llevamos: ${clics}, clics en el div: ${id}</h3>
        `;

        $info.html(html);
    });

})(jQuery);



/*
(function ($) {

    console.log('\n');
    console.warn('----------  03-data-remove-data.js  ----------');


    //  ------  referencias al HTML  -----
    const $capa = $("#capa");
    const $acumula = $("#acumula");
    const $info = $("#info");


    //  -----  data() y removeData()  -----
    $capa.data("dato", "1234");
    $capa.removeData("usuario");

    console.log('$capa.data("usuario") =>', $capa.data("usuario"));
    $info.prepend(`<h3> ${ $capa.data("usuario") } </h3>`)

    console.log('$capa.data("dato") =>', $capa.data("dato"));
    $info.prepend(`<h3> ${ $capa.data("dato") } </h3> <br>`)


    //  -----  'click' en cualquiera de los 2 divs que tengo  -----
    $("#capa, #acumula").on("click", acumulaClics);


    //  -----  función que cuenta el nº de clics de cada div  -----
    function acumulaClics() {

        console.log("\nthis =>", this, "\n$(this) =>", $(this));

        const $div = $(this);
        let numeroClickPorDiv = $div.data("numclics");


        if (typeof (numeroClickPorDiv) == "undefined") {
            numeroClickPorDiv = 1;
            console.log('Nº de clicks: ', (numeroClickPorDiv), ' en el div: ', this);
            //$info.append(`<h3> Nº de clicks: ${ numeroClickPorDiv }, en el div </h3>, ${this}`);
            $info.html(`<br> <hr> <br> <h3 class="texto-info"> Nº de clicks: ${numeroClickPorDiv}, en el div: ${$div.attr("id")}</h3>`);


        }
        else {
            numeroClickPorDiv += 1;
            console.log('Nº de clicks: ', (numeroClickPorDiv), ' en el div: ', this);
            //$info.append(`<h3> Nº de clicks: ${ numeroClickPorDiv }, en el div </h3>, ${this}`);
            $info.html(`<br> <hr> <br> <h3 class="texto-info"> Nº de clicks: ${numeroClickPorDiv}, en el div: ${$div.attr("id")}</h3>`);

        }


        $div.data("numclics", numeroClickPorDiv);
        
        if (numeroClickPorDiv == 10) {
            $div.removeData("numclics");
        }

        console.log("llevamos ", numeroClickPorDiv, " clics en el div ", this);
        //$info.append(`<h3> Llevamos ${ numeroClickPorDiv }, clics en el div </h3>, ${this}`)
        $info.html(`<h3 class="texto-info"> Llevamos: ${numeroClickPorDiv}, clics en el div: ${$div.attr("id")}</h3>`);

    }
    

})(jQuery);
*/



