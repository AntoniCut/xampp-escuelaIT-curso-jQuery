//  -----------------------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------------------
//  ----------  /10-mainipulacion-avanzada-del-contenido/  ----------
//  ----------  /06-scroll-offset/  ---------------------------------
//  ----------  /assets/js/scroll-offset.js  ------------------------
//  -----------------------------------------------------------------


export const scrollOffset = ($) => {

    const $capa = $(".capa");
    const $btnCapa = $("#btnCapa");
    const $btnScroll = $("#btnScroll");
    const $btnScrollAnimation = $("#btnScrollAnimation");
    const $p1 = $("#p1");
    const $pos = $(".pos");


    $btnCapa.on("click", function() {

        $capa.animate({
        
            top: "100px",
            left: "300px"
    
        }, 10000, function () {
            
            alert("terminé");
            console.log('offset:', $pos.offset());
            console.log('position:', $pos.position());
        });
    
    
        console.log('parrafo offset', $p1.offset());
        console.log('capa pos offset', $pos.offset());
        console.log('capa pos position', $pos.position());

    });
    


    $p1.on("click", function () {
        const scrollActual = $(window).scrollTop() - "200px";
        alert("El scroll actual de la ventana es: " + scrollActual);
    });

    $btnScroll.on("click", function () {
        
        const posicionParrafo = $p1.offset().top - 250;
                
        $("html, body").scrollTop(posicionParrafo);
        
    });


    $btnScrollAnimation.on("click", function () {
        
        const posicionParrafo = $p1.offset().top - 250;
                
        $("html, body").animate({ 
            scrollTop: posicionParrafo 
        }, 5000);
        
    });

}
