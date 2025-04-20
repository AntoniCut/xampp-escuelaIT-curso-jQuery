//  -----------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------
//  ----------  /11-eventos-en-jquery/  -----------------
//  ----------  /05-propagation/  -----------------------
//  ----------  /assets/js/propagation.js  --------------
//  -----------------------------------------------------



export const propagation = ($) => {

    //  -----  referencias al HTML  -----
    const $div = $(".div");
    const $p = $("p");
    const $span = $("span");
    const $salida1 = $("#salida1");
    const $salida2 = $("#salida2");


    //  -------------------------------------
    //  -----  Eventos con Propagación  -----
    //  -------------------------------------

    $("body, .div, p, span").click( function(e) {

        console.log('\n');
        console.log("-----  Con Propagación  -----");
        console.log("current target: ", e.target);
        console.log("this: ", this);
        
        $salida1.html( $salida1.html() + "<br> <br> <h4>Con Propagacion - Has hecho click </h4> " + " e.target = " + e.target + "<br> e.currentTarget = " + e.currentTarget + "<hr>");
        
    });

    

    //  -------------------------------------
    //  -----  Eventos Sin Propagación  -----
    //  -------------------------------------
    
    $span.click(manejador);

    $(document).click(manejador);

    function manejador(e) {
        
        console.log('\n');
        console.log("-----  Sin Propagación  -----");
        console.log("current target: ", e.target);
        console.log("this: ", this);
        
        $salida2.html( $salida2.html() + "<br> <br> <h4> Sin Propagacion - Has hecho click </h4> " + " e.target = " + e.target + "<br> e.currentTarget = " + e.currentTarget + "<hr>");
        e.stopPropagation();
        //return false;
    }

    $p.click(function (e) {
        $(e.target).css("color", "red");
        e.stopPropagation();
    });

    $div.click(function (e) {
        $(this).css("background-color", "green");
        e.stopPropagation();
    });
    

}
