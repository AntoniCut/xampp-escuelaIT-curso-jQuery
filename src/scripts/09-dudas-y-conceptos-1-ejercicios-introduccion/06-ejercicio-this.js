/*
    -------------------------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  -------------------------------------
    ----------  /src/scripts/  ----------------------------------------------------
    ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-jquery/  ----------
    ----------  /06-ejercicio-this.js  --------------------------------------------
    -------------------------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  06-ejercicio-this.js  ----------');
    console.log('\n');

    
    const $lis = $('section.main__ejercicio-this ul li');


    //  -----  ejemplo con this, objeto nativo de JavaScript.  ---------------------------- 
    //  -----  No esta extendido con las funcionalidades de jQuery.  ----------------------
    //  -----  Sobre this yo podre ejecutar cosas que tengan que ver con JavaScript.  -----
    //  -----  Pero no cosas que tengan que ver con jQuery.  ------------------------------
    
    $lis.each(function () { 
                
        //  -----  Operaciones que quieres realizar para cada elemento "genérico", en este  -----
        //  -----  caso son los LI de mi página. Este código se ejecuta 3 veces.  ---------------
        //  -----  this, en cada iteración serta el li actual  ----------------------------------
        console.log('this', this);
      
    });


    console.log('\n');

    //  -----  Ejemplo con $(this), this extendido con las funcionalidades de jQuery.  -----
    
    $lis.each(function () { 
                 
        const elemActual = $(this);
        console.log('elemActual', elemActual);
                
        const elemValue = elemActual.text();
        console.log('elemValue', elemValue);
                
        elemActual.css("color", "green");

        //  -----  Esto no lo podría hacer porque this, tal cual, no es un objeto jquery  -----
        //  this.css("background-color", "orange");
        $(this).css("background-color", "orange");

        console.log("innerHTML:", this.innerHTML);

        //alert("Paro en cada iteración");
                 
    });
        
    
})(jQuery);
