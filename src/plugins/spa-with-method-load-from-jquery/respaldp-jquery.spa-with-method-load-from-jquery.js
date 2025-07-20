/*
    --------------------------------------------------------------------
    ----------  /jquery.spa-whith-method-load-from-jquery.js  ----------
    --------------------------------------------------------------------
*/


//  ----------  Envuelve el plugin en una función de modulos ES6  ----------
export const spaWithMethodLoadFromJQueryPlugins = ($) => {


    (function ($) {

        //  ----------  Plugins jquery.spa-with-jquery.js  ----------
        $.fn.spaWithMethodLoadFromJQuery = function (options) {

            const settings = $.extend({
                routes: [],
                base: '',
                layoutHeader: '#layoutHeader',
                layoutGoHome: '#layoutGoHome',
                layoutNavbar: '#layoutNavbar',
                layoutMain: '#layoutMain',
                layoutFooter: '#layoutFooter',
                urlHeader: '',
                urlNavBar: '',
                urlFooter: '',
                urlHome: '',
                titlePage: 'Página sin Título',
                homePath: '/',
                faviconPage: '',
                titleHeader: 'Página sin Título',
                draggable: false
            }, options);



            //  ----------  referencias al HTML  ----------
            const $layoutHeader = $(settings.layoutHeader);
            const $layoutNavbar = $(settings.layoutNavbar);
            const $layoutMain = $(settings.layoutMain);
            const $layoutFooter = $(settings.layoutFooter);

           

            //  ------------------------------------------------------------------------------------
            //  ----------  función para la Carga del Contenido Inicial de la Aplicación  ----------
            //  ------------------------------------------------------------------------------------
            function init() {


                //  -----  Cargamos el navbar para que siempre este disponible  -----    ----------
                $layoutNavbar.load(settings.urlNavBar, () => actionsNavbar());

                if (settings.draggable)
                    draggableComponentsHtml();


                const initialPath = window.location.pathname.replace(settings.base, '');
                const initialRoute = settings.routes.find(route => route.path === initialPath);

                if (initialRoute)
                    loadContent(initialRoute);

                else
                    loadContent({
                        url: settings.urlHome,
                        title: settings.titlePage,
                        path: settings.homePath,
                        favicon: settings.faviconPage,
                        headerTitle: settings.titleHeader,
                        styles: settings.urlHome,
                        scripts: [settings.urlHome]
                    });


                //  ----------  Guarda el estado inicial para que el botón "Atrás y adelante" funcione correctamente  ----------
                history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
            }


            //  --------------------------------------------------------------------
            //  ----------  función para mover componentes por la página  ----------
            //  --------------------------------------------------------------------
            function draggableComponentsHtml() {

                //  ----------  Hacemos los menús arrastrables  ----------
                $layoutNavbar.draggable({
                    containment: 'parent',
                    scroll: false
                });

            }


            //  ------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido  ----------
            //  ------------------------------------------------------------------
            function loadContent(route) {

                //  -----  Si el navegador no soporta ViewTransition, usa el método clásico  -----
                if (!document.startViewTransition)
                    return loadContentWithoutViewTransition(route);

                loadContentWithViewTransition(route);

            }


            //  -------------------------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido con viewtransition  ----------
            //  -------------------------------------------------------------------------------------
            function loadContentWithViewTransition(route) {

                //  -----  Usamos la API ViewTransition para una transición suave  -----
                document.startViewTransition(() => {

                    return new Promise(resolve => {

                        loadTodoContentInHtml(route);
                        resolve();                  //  -----  finaliza la transición  -----
                    });
                });
            }



            //  -------------------------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido sin viewtransition  ----------
            //  -------------------------------------------------------------------------------------
            function loadContentWithoutViewTransition(route) {

                loadTodoContentInHtml(route);

            }



            //  -----------------------------------------------------------------
            //  ----------  Función que carga el contenido en el HTML  ----------
            //  -----------------------------------------------------------------
            function loadTodoContentInHtml(route) {


                //  -----  carga el header  -----
                $layoutHeader.load(settings.urlHeader, function () {
                    $('#titlePage').html(route.headerTitle);
                });


                //  -----  cargamos el navbar  -----
                //$layoutNavbar.load(settings.urlNavBar, () => actionsNavbar());


                //  -----  carga el contenido del main  -----
                $layoutMain.load(route.url, function (response, status, xhr) {

                    if (status === "error") {
                        console.error(`Error al cargar ${route.url}: ${xhr.statusText}`);
                        $layoutMain.html('<p>Error 404: No se pudo cargar el contenido.</p>');
                        return resolve();
                    }

                    document.title = route.title;

                    const newUrl = `${settings.base}${route.path}`;
                    if (window.location.pathname !== newUrl) {
                        history.pushState({ path: newUrl }, '', newUrl);
                    }

                    updateFavicon(route.favicon);


                    if (route.styles)
                        loadStylesheet(route.styles);

                    if (route.scripts)
                        route.scripts.forEach(script => loadScriptsIfExists(script));

                });


                //  -----  cargamos el footer  -----
                $layoutFooter.load(settings.urlFooter);

            }



            //  --------------------------------------------------------
            //  ----------  Función que Actualiza el Favicon  ----------
            //  --------------------------------------------------------
            function updateFavicon(favicon) {

                let $favicon = $('link[rel~="icon"]');

                if ($favicon.length === 0) {
                    $favicon = $('<link rel="icon" type="image/x-icon">').appendTo('head');
                }

                $favicon.attr('href', `${favicon}?t=${new Date().getTime()}`);

            }


            //  ------------------------------------------------------------------
            //  ----------  Función que Carga los estilos de la página  ----------
            //  ------------------------------------------------------------------
            function loadStylesheet(cssFile) {

                let $stylesheet = $(`link[href*="${cssFile}"]`);
                if ($stylesheet.length === 0) {
                    $stylesheet = $('<link rel="stylesheet">').appendTo('head');
                }
                $stylesheet.attr('href', `${cssFile}?t=${new Date().getTime()}`);
            }


            //  ------------------------------------------------------------------
            //  ----------  Función que Carga un Script si este Existe  ----------
            //  ------------------------------------------------------------------
            function loadScriptsIfExists(scriptUrl) {

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


            //  ------------------------------------------------------
            //  ----------  Función para acciones del menu  ----------
            //  ------------------------------------------------------
            const actionsNavbar = () => {

                const $layoutNavbar = $('.layout__navbar');

                $layoutNavbar.hide();

                //  -----  Oculta el menú inicialmente con CSS o aquí, pero usando delegación es más seguro así  -----
                $(document).on('mouseenter', '.layout__navbar', function () {
                    $(this).stop(true, true); // evita que se acumulen animaciones
                });

                //  -----  Toggle del menú al hacer click en el título  -----
                $(document).on('click', '.navbar__title', function (e) {
                    e.stopPropagation();
                    $('.layout__navbar').stop(true, true).slideToggle();  //  -----  usa stop para evitar acumulación  -----
                });

                //  -----  Evitar cierre si se hace clic dentro del menú  -----
                $(document).on('click', '.layout__navbar', function (e) {
                    e.stopPropagation();
                });

                //  -----  Cerrar si se hace clic fuera del menú  -----
                $(document).on('click', function () {
                    $('.layout__navbar').stop(true, true).slideUp();
                });

            }



            //  -----------------------------------------------------------
            //  ----------  Manejador de clics para los enlaces  ----------
            //  -----------------------------------------------------------
            $(document).on('click', 'a[data-id]', function (event) {

                event.preventDefault();

                //  -----  Obtener el ID del enlace clicado  -----
                const dataId = $(this).data('id');
                const route = settings.routes.find(route => route.id === dataId);

                //  -----  Ocultamos la lista del menú efecto slideUp antes de cambiar el contenido  -----
                const $layoutNavbar = $('.layout__navbar');
                $layoutNavbar.slideUp();

                //  -----  si hemos clicado en una seccion del menú  -----
                //  -----  cargamos el contenido de la sección  ----------
                if (route)
                    loadContent(route);

            });



            //  ----------------------------------------------------------
            //  ----------  Manejar retrocesos en el historial  ----------
            //  ----------------------------------------------------------
            window.addEventListener('popstate', function (event) {

                //  -----  Usar `event.state.path` si está disponible, si no, tomar la URL actual  -----
                const matchedPath = event.state?.path ? event.state.path.replace(settings.base, '') : window.location.pathname.replace(settings.base, '');
                const matchedRoute = settings.routes.find(route => route.path === matchedPath);

                if (matchedRoute) {

                    loadContent(matchedRoute);

                    if (matchedRoute.path === '/')
                        $layoutNavbar.load(settings.urlNavBar);

                } else
                    loadInitialContent();

            });


            //  ------------------------------------------------
            //  ----------  Punto Inicial del Plugin  ----------
            //  ------------------------------------------------

            console.log('\n');
            console.warn('----------------------------------------------------------------------------------------------------');
            console.warn('----------  pluging - jquery.spa-with-method-load-from-jquery.js - cargado correctamente  ----------');
            console.warn('----------------------------------------------------------------------------------------------------');
            console.log('\n');

            //  ----------  INICIO Aplicación  ----------
            init();


        };


    })(jQuery);


}
