//  ---------------------------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  --------------
//  ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-a-jquery/  ----------  
//  ----------  /07-ejercicio-date/  ---------------------------------------------------  
//  ----------  /main.js  -----------------------------------------------------------
//  --------------------------------------------------------------------------------- 


import { loadJQueryByCdnOLocal } from "../../assets/plugins/load-jquery-by-cdn-local.js";
import { ejercicioDate } from "./assets/js/07-ejercicio-date.js";


//  ----------  Carga de jQuery  ----------
const jQueryConfig = {

    srcCdnJQuery: "https://code.jquery.com/jquery-1.11.0.min.js",
    integrityCdnJQuery: "sha256-spTpc4lvj4dOkKjrGokIrHkJgNA0xMS98Pw9N7ir9oI=",
    crossOriginCdnJQuery: "anonymous",
    referrePolicyCdnJQuery: "no-referrer",
    srcLocalJQuery: "../../assets/jquery/core/jquery-1.11.1.min.js",
}

const scriptMain = ejercicioDate;


//  -----  Ejecutamos las Promesa  -----
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(jQueryConfig)

    .then($ => {
        
        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);
        scriptMain($);              //  -----  cargamos el script principal del proyecto  -----
    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));
