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
            const $layoutNavbar = $(settings.layoutNavbar);
            const $layoutMain = $(settings.layoutMain);
            const $layoutFooter = $(settings.layoutFooter);



            //  ---------------------------------------------------------------------
            //  ----------  función para la Carga de los Componentes HTML  ----------
            //  ---------------------------------------------------------------------
            function loadInitialComponentsHtml() {


                $layoutNavbar.load(settings.urlNavBar, () => actionsNavbar());

                $layoutMain.load(settings.layoutMain);

                $layoutFooter.load(settings.urlFooter);

                if (settings.draggable)
                    draggableComponentsHtml();
            }


            //  --------------------------------------------------------------------
            //  ----------  función para mover componentes por la página  ----------
            //  --------------------------------------------------------------------
            function draggableComponentsHtml() {

                //  ----------  Hacemos los menús arrastrables  ----------
                $layoutNavbar.draggable({
                    //containment: 'window',
                    //scroll: false
                });

            }


            //  -------------------------------------------------------------------
            //  ----------  función para la Carga del Contenido Inicial  ----------
            //  -------------------------------------------------------------------
            function loadInitialContent() {

                const initialPath = window.location.pathname.replace(settings.base, '');
                const initialRoute = settings.routes.find(route => route.path === initialPath);

                if (initialRoute) {

                    loadContent(initialRoute);

                } else {

                    loadContent({
                        url: settings.urlHome,
                        title: settings.titlePage,
                        path: settings.homePath,
                        favicon: settings.faviconPage,
                        headerTitle: settings.titleHeader,
                        styles: settings.urlHome,
                        scripts: [settings.urlHome]
                    });

                }

                //  ----------  Guarda el estado inicial para que el botón "Atrás" funcione correctamente  ----------
                history.replaceState({ path: window.location.pathname }, '', window.location.pathname);
            }


            //  ------------------------------------------------------------------
            //  ----------  Función para manejar la carga de contenido  ----------
            //  ------------------------------------------------------------------
            function loadContent(route) {


                $layoutMain.load(route.url, function (response, status, xhr) {

                    if (status === "error") {

                        console.error(`Error al cargar ${route.url}: ${xhr.statusText}`);
                        $layoutMain.html('<p>Error 404: No se pudo cargar el contenido.</p>');

                    } else {

                        //  -----  Cambiamos el title de la página  -----
                        document.title = route.title;

                        //  -----  Solo cambia la URL si es diferente a la actual  -----
                        const newUrl = `${settings.base}${route.path}`;

                        if (window.location.pathname !== newUrl) {
                            history.pushState({ path: newUrl }, '', newUrl);
                        }

                        //  -----  Actualizar el favicon  -----
                        updateFavicon(route.favicon);

                        //  -----  Esperar a que el layoutHeader haya sido cargado completamente antes de cambiar el texto  -----
                        $(settings.layoutHeader).load(settings.urlHeader, function () {
                            $('#titlePage').html(route.headerTitle);
                        });

                        //  -----  Cargar la hoja de estilos de la página  -----
                        if (route.styles)
                            loadStylesheet(route.styles);

                        //  -----  Cargar script de las secciones si estos existen  -----
                        if (route.scripts)
                            route.scripts.forEach(script => loadScriptsIfExists(script));

                    }

                });

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


                const $navbarList = $('.navbar__list');
                //const $navbarTitle = $('.navbar__title');

                $navbarList.hide();

                // Oculta el menú inicialmente con CSS o aquí, pero usando delegación es más seguro así:
                $(document).on('mouseenter', '.navbar__list', function () {
                    $(this).stop(true, true); // evita que se acumulen animaciones
                });

                // Toggle del menú al hacer click en el título
                $(document).on('click', '.navbar__title', function (e) {
                    e.stopPropagation();
                    $('.navbar__list').stop(true, true).slideToggle();  // usa stop para evitar acumulación
                });

                // Evitar cierre si se hace clic dentro del menú
                $(document).on('click', '.navbar__list', function (e) {
                    e.stopPropagation();
                });

                // Cerrar si se hace clic fuera del menú
                $(document).on('click', function () {
                    $('.navbar__list').stop(true, true).slideUp();
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


                //  -----  si hemos clicado en una seccion del menú  -----
                //  -----  cargamos el contenido de la sección  ----------
                if (route)
                    loadContent(route);

                //  -----  Ocultamos la lista del menú  -----
                const $nanvbarList = $('.navbar__list');
                $nanvbarList.slideUp();

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


            //  ----------  Cargamos los Componentes HTML y el Contenido Inicial  ----------
            console.log('\n');
            console.warn('pluging - jquery.spa-with-method-load-from-jquery.js - cargado correctamente');

            loadInitialComponentsHtml();
            loadInitialContent();

        };


    })(jQuery);


}
