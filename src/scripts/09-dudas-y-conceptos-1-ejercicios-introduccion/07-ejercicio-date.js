//  ---------------------------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------------  --------------
//  ----------  /09-dudas-y-conceptos-i-ejercicios-introduccion-a-jquery/  ----------  
//  ----------  /07-ejercicio-date/  ------------------------------------------------  
//  ----------  /assets/js/07-ejercicio-date.js  ------------------------------------
//  --------------------------------------------------------------------------------- 


export const ejercicioDate = ($) => {

    function timestampSegundos(){
        const date = new Date();
        return Math.round( date.getTime() / 1000);
    }


    //  ------------------------------------------------------------------------------------------------
    //  Guarda el tiempo de carga en la variable instanteActual.
    //  Se almacena este tiempo en cada <p> usando .data("time", instanteActual), 
    //  lo que significa que cada párrafo tiene guardado el momento exacto en que la página se cargó.
    //  ------------------------------------------------------------------------------------------------

    //  -----  guardar el instante actual en mis párrafos  -----
    let instanteActual = timestampSegundos();

    console.log('\ninstante actual:', instanteActual);
    $("p").data("time", instanteActual);



    $("p").on("click", function(){
                
        //  -----  calcular el número de segundos desde el último clic  -----
        //  -----  mostrarlo en consola  -----
        let ahora = timestampSegundos();
        console.log('\nahora:', ahora);
                
        //  -----  this ¿qué contiene aquí?  -----
        //  obtenemos el párrafo clicado y lo convertimos en un objeto jQuery.
        const parrafoPulsado = $(this);

        //  -------------------------------------------------------------------------------
        //  Obtiene el instante del último clic almacenado en .data("time").
        //  Resta ahora - instanteUltimoClic para obtener los segundos transcurridos.
        //  Muestra en consola la información.
        //  -------------------------------------------------------------------------------
        const instanteUltimoClic = parrafoPulsado.data("time");
        let numSegundos = ahora - instanteUltimoClic;
        console.log("El número de segundos desde el último clic es ", numSegundos, " y el párrafo es: ", parrafoPulsado);
           
        //  -----  obtenemos el número de párrafo pulsado  -----
        let numParrafo = parrafoPulsado.index() + 1;
                
        //  -----  mostramos el resultado en el html  -----
        $("#result").html(`<h3> El número de segundos desde el último clic es ${numSegundos}, y el número de párrafo es ${numParrafo} </h3>`);

        //  -----  actualizamos el dato del párrafo para colocar el instante de el último clic (ahora)  -----
        parrafoPulsado.data("time", ahora);
   
       
    });

}
