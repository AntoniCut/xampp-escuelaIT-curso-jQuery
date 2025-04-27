/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /11-eventos/  --------------------------
    ----------  /07-pagex-pagey.js  --------------------
    ----------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  07-pagex-pagey.js  ----------');


    //  -----  referencias al HTML  -----
    const $div = $(".div");
    
    $div.mouseenter(function(e){
        $(this).text(e.pageX + " X " + e.pageY);
    });

    $div.mouseleave(function(e){
        $(this).text('');
    });


    $div.click(function(e){
        $(this).text(e.pageX + " X " + e.pageY);
    });


})(jQuery);
