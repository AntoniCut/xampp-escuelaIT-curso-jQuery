//  -----------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  
//  ----------  /10-mainipulacion-avanzada-del-contenido/  ----------  
//  ----------  /02-inyeccion-after-before/  ------------------------  
//  ----------  /main.js  -------------------------------------------
//  ----------------------------------------------------------------- 


import { loadJQueryByCdnOLocal } from "../../assets/plugins/load-jquery-by-cdn-local.js";
import { inyeccionAfterBefore } from "./assets/js/inyeccion-after-before.js";


//  ----------  Carga de jQuery  ----------
const srcCdnJQuery = "https://code.jquery.com/jquery-1.11.0.min.js";
const integrityCdnJQuery = "sha256-spTpc4lvj4dOkKjrGokIrHkJgNA0xMS98Pw9N7ir9oI=";
const crossOriginCdnJQuery = "anonymous";
const referrePolicyCdnJQuery = "no-referrer";
const srcLocalJQuery = "../../assets/jquery/core/jquery-1.11.1.min.js";
const scriptMain = inyeccionAfterBefore;


//  -----  Ejecutamos las Promesa  -----
console.warn("Iniciando carga de jQuery...");
console.log('\n')

loadJQueryByCdnOLocal(srcCdnJQuery, integrityCdnJQuery, crossOriginCdnJQuery, referrePolicyCdnJQuery, srcLocalJQuery)

    .then($ => {
        
        console.log('\n');
        console.warn("jQuery cargado correctamente - Version:", $.fn.jquery);
        scriptMain($);              //  -----  cargamos el script principal del proyecto  -----
    })

    .catch(err => console.error("Error al cargar jQuery o jQuery UI:", err));
