/*
    --------------------------------------------------
    ----------  /01-curso-jquery/  -------------------
    ----------  /src/scripts/  -----------------------
    ----------  /load-components-layout.js  ----------
    --------------------------------------------------
*/


import { actionsNavbar } from "/01-curso-jquery/src/scripts/actions-navbar.js";


export const loadComponentsLayout = (headerTitle) => {


    (function ($) {

        console.log('\n')
        console.warn('-----  load-components-layouts.js  -----');

        const $layoutHeader = $('#layoutHeader');
        const $layoutNavbar = $('#layoutNavbar');
        const $layoutThemesUI = $('#layoutThemesUI');
        const $layoutFooter = $('#layoutFooter');


        $layoutHeader.load(

            '/01-curso-jquery/src/components-layout/layout-header.html',

            function () {

                const $headerTitle = $('.header__title');
                $headerTitle.html(`${headerTitle}`);

            }
        )


        $layoutNavbar.load(

            '/01-curso-jquery/src/components-layout/layout-navbar.html',

            function () {

                actionsNavbar();

            }
        );


        //$layoutThemesUI.load('/04-master-javascript-clasico-jquery-typescript-mean/04-jquery/src/plugins/themes-jquery-ui/themes-jquery-ui.html');

        $layoutFooter.load('/01-curso-jquery/src/components-layout/layout-footer.html');



    })(jQuery);

}
