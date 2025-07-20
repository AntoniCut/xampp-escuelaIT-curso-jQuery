/*
    ---------------------------------------------
    ----------  /01-curso-jquery/  --------------
    ----------  /src/scripts/  ------------------
    ----------  /spa-curso-jquery.js/  ----------
    ---------------------------------------------
*/

import { routesClases01To06 } from "/01-curso-jquery/src/routes/routes-clases-01-06.js";
import { routesClase07 } from "/01-curso-jquery/src/routes/routes-clase-07.js";


export const spaCursoJQuery = ($) => {

    
    //  ----------  Documento Cargado  ----------
    console.log('\n');
    console.warn('-----  spa-jquery.js  -----');
       
    
    //  ----------  Arrays con la informacion del contenido a cargar de las rutas del proyecto ----------
    const allRoutes = [
        ...routesClases01To06,
        ...routesClase07
    ];

  
    //  ----------  referencias al HTML  ----------
    const $layout = $('#layout');


    //  ----------  Opciones que le pasamos al plugins  ----------
    const configOptions = {
        routes: allRoutes,
        base: '/01-curso-jquery',
        layoutHeader: '#layoutHeader',
        layoutNavbar: '#layoutNavbar',
        layoutMain: '#layoutMain',
        layoutFooter: '#layoutFooter',
        urlHeader: '/01-curso-jquery/src/components-layout/layout-header.html',
        urlNavBar: '/01-curso-jquery/src/components-layout/layout-navbar.html',
        urlFooter: '/01-curso-jquery/src/components-layout/layout-footer.html',
        urlHome: '/01-curso-jquery/src/pages/home/index.html',
        titlePage: 'Curso de jQuery de Escuela IT',
        homePath: '/',
        faviconPage: '/01-curso-jquery/src/favicon/jquery-favicon-original.ico',
        titleHeader: 'Curso de jQuery de Escuela IT',
        draggable: true
    }


    //  ----------  Invocamos el Plugins  --  jquery.spa-with-method-load-from-jquery.js  ----------
    $layout.spaWithMethodLoadFromJQuery(configOptions);

}
