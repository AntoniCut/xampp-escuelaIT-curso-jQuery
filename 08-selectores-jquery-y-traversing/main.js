/*  
    -------------------------------------------------------------
    ----------  /01-curso-jquery/  ------------------------------
    ----------  /07-manipulacion-basica-de-elementos/  ----------
    ----------  /main.js  ---------------------------------------
    -------------------------------------------------------------  
*/


import { cdnJQuery_1_11_0 } from "/01-curso-jquery/src/libs/jquery/cdn/cdn-jquery-1.11.0.js";
import { loadJQueryByCdnOLocal } from "/01-curso-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";
import { loadComponentsLayout } from "/01-curso-jquery/src/scripts/load-components-layout.js";


//  -----  scripts libs jQuery  -----
const cdnJQuery = cdnJQuery_1_11_0;
const localJQuery = "/01-curso-jquery/src/libs/jquery/local/jquery-1.11.1.min.js";

//  -----  declarar el tilulo del header  -----
const headerTitle = 'Clase 8 - Selectores jQuery y Traversing <br> y pdf selectores y traversing';

//  ------------------------------------------------------------------------------------
//  -----  Ejecutamos la Promesa de carga de jQuery y el script del proyecto  ----------
//  ------------------------------------------------------------------------------------
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(cdnJQuery, localJQuery)

    .then($ => {

        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);

        //  -----  cargamos el script que carga los componentes de la layout, y script del proyecto  -----
        loadComponentsLayout(headerTitle);
                
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
