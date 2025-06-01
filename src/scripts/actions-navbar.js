/*
    -----------------------------------------------------------------------------
    ----------  /04-master-javascript-clasico-jquery-typescript-mean/  ----------
    ----------  /src/scripts/  --------------------------------------------------
    ----------  /menu-display.js  -----------------------------------------------
    -----------------------------------------------------------------------------
*/



export const actionsNavbar = () => {

    (function ($) {

        console.log('\n');
        console.warn('-----  actions-navbar.js  -----');


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

    })(jQuery);
};










/*
(function ($) {


    console.log('\n')
    console.warn('-----  menu-display.js  -----');

    const $navbarList = $('.navbar__list');
    const $navbarTitle = $('.navbar__title');

    $navbarList.hide();


    //  -----  Toggle del menú al hacer click en el título  -----
    $(document).on('click', '.navbar__title', function (e) {
        
        $navbarList.slideToggle();
        e.stopPropagation();            //  -----  Evita que el documento también lo capture  -----
    });


    //  -----  Cerrar si se hace click fuera del menú  -----
    $(document).on('click', function () {
        
        $navbarList.slideUp();
    });


})(jQuery);
*/
