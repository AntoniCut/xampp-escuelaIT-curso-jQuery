//  -----------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------
//  ----------  /08-selectores-jquery-y-traversing/  ----------  
//  ----------  /02-probar-selectores/  -----------------------  
//  ----------  /assets/js/02-probar-selectores.js  -----------
//  ----------------------------------------------------------- 


export const probarSelectores = ($) => {

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
       
}
