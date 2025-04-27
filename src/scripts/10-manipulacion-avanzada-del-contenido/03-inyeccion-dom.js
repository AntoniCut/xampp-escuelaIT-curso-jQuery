/*
    ----------------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------------
    ----------  /src/scripts/  -------------------------------------
    ----------  /10-manipulacion-avanzada-del-contenido/  ----------
    ----------  /03-inyeccion-dom.js  ------------------------------
    ----------------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  03-inyeccion-dom.js  ----------');


    //  -----  insertar un hr después de cada item  -----
    //$("<hr>").insertAfter(".item");
    $(".item").after("<hr>");


    //  -----  generar enlace  -----
    const enlace = $('<a href="#"> Marcar como spam </a>').css("color", "#004");


    enlace.on("click", function (evento) {

        evento.preventDefault();

        const enlace = $(this);

        const coment = enlace.parent().prev();
        const idComent = coment.data("idcomentario");

        console.log("comentario", idComent);
        console.log(this);

        alert("Estás marcando como spam el comentario " + idComent);

        //  -----  vaciamos el comentario  -----
        //enlace.empty();
        //enlace.css("padding", "0px");

        //  -----  eliminamos el enlace  -----
        enlace.remove();

    });


    const comentario = $(".coment");

    //  -----  insertar enlace después de cada comentario  -----
    comentario.after(enlace);

    //  -----  accedemos al enlace y envolvemos cada enlace en un párrafo 
    //  -----  y cambiamos estilo de fuente  -----
    comentario.next().wrap("<p>").css("font-size", "80%");


})(jQuery);
