/*
    -----------------------------------------
    ----------  /01-curso-jquery/  ----------
    ----------  /main.js  -------------------
    -----------------------------------------  
*/


//import { cdnJQuery_3_6_3 } from "/01-curso-jquery/src/libs/jquery/cdn/cdn-jquery-3.6.3.js";
import { cdnJQuery_4_0_0 } from "/01-curso-jquery/src/libs/jquery/cdn/cdn-jquery-4.0.0.js";
import { loadJQueryByCdnOLocal } from "/01-curso-jquery/src/libs/jquery/load/load-jquery-by-cdn-local.js";

import { cdnJQueryUI_1_14_1 } from "/01-curso-jquery/src/libs/jquery-ui/cdn/cdn-jquery-ui-1.14.1.js";
import { loadJQueryUIByCdnOLocal } from "/01-curso-jquery/src/libs/jquery-ui/load/load-jquery-ui-by-cdn-local.js";

import { spaWithMethodLoadFromJQueryPlugins } from "/01-curso-jquery/src/plugins/spa-with-method-load-from-jquery/jquery.spa-with-method-load-from-jquery.js";
import { spaCursoJQuery } from "/01-curso-jquery/src/scripts/spa-curso-jquery.js";


//  -----  Carga de jQuery  -----
const cdnJQuery = cdnJQuery_4_0_0;
const localJQuery = "/01-curso-jquery/src/libs/jquery/local/jquery-4.0.0-beta.min.js";

//  -----  Carga de jQuery UI  -----
const cdnJQueryUI = cdnJQueryUI_1_14_1;
const localJQueryUI = "/01-curso-jquery/src/libs/jquery-ui/local/jquery-ui-1.14.1.min.js";


//  -------------------------------------
//  -----  Ejecutamos las Promesas  -----
//  -------------------------------------

console.warn("Iniciando carga de jQuery y jQueryUI...");
console.log('\n')

loadJQueryByCdnOLocal( cdnJQuery, localJQuery )

    .then( $ => {
        
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);
        
        //  -----  cargamos jQueryUI  -----
        loadJQueryUIByCdnOLocal( cdnJQueryUI, localJQueryUI )
        .then( $ => {
        
            if (!$.ui) { 
                console.log('\n');
                throw new Error("jQuery UI no se cargó correctamente.");
            }
            
            console.warn("jQuery UI cargado correctamente - Version:", $.ui.version);
                
            //  -----  cargamos el plugin que carga el contenido  -----
            spaWithMethodLoadFromJQueryPlugins($);
            
            //  -----  cargamos el script principal del proyecto  -----
            spaCursoJQuery($)
        })

    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));

