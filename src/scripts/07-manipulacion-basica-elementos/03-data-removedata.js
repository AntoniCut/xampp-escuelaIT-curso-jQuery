/*
    ----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------
    ----------  /src/scripts/  -------------------------------
    ----------  /07-manipulacion-basica-elementos/  ----------
    ----------  /03-data-removedata.js  ----------------------
    ----------------------------------------------------------
*/


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
    $info.append(`<h3> ${ $capa.data("usuario") } </h3>`)
    
    console.log('$capa.data("dato") =>', $capa.data("dato"));
    $info.append(`<h3> ${ $capa.data("dato") } </h3> <br>`)


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
            $info.append(`<br> <hr> <br> <h3> Nº de clicks: ${numeroClickPorDiv}, en el div: ${$div.attr("id")}</h3>`);


        }
        else {
            numeroClickPorDiv += 1;
            console.log('Nº de clicks: ', (numeroClickPorDiv), ' en el div: ', this);
            //$info.append(`<h3> Nº de clicks: ${ numeroClickPorDiv }, en el div </h3>, ${this}`);
            $info.append(`<br> <hr> <br> <h3> Nº de clicks: ${numeroClickPorDiv}, en el div: ${$div.attr("id")}</h3>`);

        }


        $div.data("numclics", numeroClickPorDiv);
        
        if (numeroClickPorDiv == 10) {
            $div.removeData("numclics");
        }

        console.log("llevamos ", numeroClickPorDiv, " clics en el div ", this);
        //$info.append(`<h3> Llevamos ${ numeroClickPorDiv }, clics en el div </h3>, ${this}`)
        $info.append(`<h3> Llevamos: ${numeroClickPorDiv}, clics en el div: ${$div.attr("id")}</h3>`);

    }
    

})(jQuery);
 



