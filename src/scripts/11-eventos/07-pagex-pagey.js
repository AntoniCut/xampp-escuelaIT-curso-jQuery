//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /07-pagex-pagey/  ----------------------
//  ----------  /assets/js/pagex-pagey.js  -------------
//  ----------------------------------------------------



export const pageXPageY = ($) => {

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

}
