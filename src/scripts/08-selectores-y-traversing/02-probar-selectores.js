/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /08-selectores-y-traversing/  ----------
    ----------  /02-probar-selectores.js  --------------
    ----------------------------------------------------
*/


(function ($) {


	console.log('\n');
    console.warn('----------  03-probar-selectores.js  ----------');


    $("#bsel").on("click", function () {
                
        let selector = $("#selector").val();
        let color = "#" + $("#color").val();
        let colorTexto = "#" + $("#colorTexto").val();
        console.log('selector: ', selector, " - color: ", color);
        
        $(selector).css({
            "background-color": color,
            "color": colorTexto
        });
    });
    

})(jQuery);
  

