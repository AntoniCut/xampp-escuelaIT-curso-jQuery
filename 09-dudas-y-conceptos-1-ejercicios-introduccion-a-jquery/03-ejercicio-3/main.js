/*  
    ---------------------------------------------------------------------------------
    ----------  /01-curso-jquery/  --------------------------------------------------
    ----------  /09-dudas-y-conceptos-1-ejercicios-introduccion-a-jquery/  ----------
    ----------  /03-ejercicio-3/  ---------------------------------------------------
    ----------  /main.js  -----------------------------------------------------------
    ---------------------------------------------------------------------------------  
*/


import { cdnJQuery_1_11_0 } from "/01-curso-jquery/src/libs/jquery/cdn/cdn-jquery-1.11.0.js";
import { loadJQueryByCdnOLocal } from "/01-curso-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";
import { loadComponentsLayout } from "/01-curso-jquery/src/scripts/load-components-layout.js";


//  -----  scripts libs jQuery  -----
const cdnJQuery = cdnJQuery_1_11_0;
const localJQuery = "/01-curso-jquery/src/libs/jquery/local/jquery-1.11.1.min.js";

//  -----  declarar el tilulo del header, url script del proyecto  -----
const headerTitle = 'Clase 9. Dudas y conceptos 1 <br> Ejercicios introducción a jQuery - 3. Ejercicio 3';
const scriptUrl = "/01-curso-jquery/src/scripts/09-dudas-y-conceptos-1-ejercicios-introduccion/03-ejercicio3.js";


//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos el script principal del proyecto  -----
        loadComponentsLayout(headerTitle);
        loadScript(scriptUrl);
    })

    .catch(err => console.error("Error al cargar jQuery:", err));


//  ----------------------------------------------------------------------------------------
//  ----------  Función que carga el script del proyecto de la lógica con jQuery  ----------
//  ---------------------------------------------------------------------------------------- 
function loadScript(scriptUrl) {

    $.ajax({

        url: scriptUrl,
        type: 'HEAD',

        success: function () {

            $.getScript(scriptUrl)
                .done(() => console.log(`Cargado: ${scriptUrl}`))
                .fail((jqxhr, settings, exception) => console.error(`Error en ${scriptUrl}:`, exception));
        },

        error: function () {
            console.warn(`No existe el script: ${scriptUrl}`);
        }

    });

}
