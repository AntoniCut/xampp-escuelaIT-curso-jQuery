//  --------------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  -------------
//  ----------  /11-eventos-en-jquery/  --------------------
//  ----------  /06-evitar-doble-click/  -------------------
//  ----------  /assets/js/evitar-doble-click.js  ----------
//  --------------------------------------------------------



export const evitarDosClick = ($) => {

    //  -----  referencias al HTML  -----
    const $span = $("span");
    const $salida = $("#salida");
    


    $span.one("click", manejador);

    function manejador(e) {
        
        console.log('\n');
        console.log('e.wich:', e.which);
        console.log("current target: ", e.target);
        console.log("this: ", this);

        $salida.html( $salida.html() + "<br> <br> <h4> Has hecho click </h4> " + " e.target = " + e.target + "<br> e.currentTarget = " + e.currentTarget + "<hr>");
        e.stopPropagation();
        
        setTimeout(function () {
            $span.one("click", manejador);
        }, 4000)

    }

    
}
