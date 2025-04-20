/*
    ----------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------------
    ----------  /src/scripts/  -------------------------------
    ----------  /07-manipulacion-basica-elementos/  ----------
    ----------  /01-metodos-html-y-text.js  ------------------
    ----------------------------------------------------------
*/


(function ($) {

    console.log('\n')
    console.warn('-----  01-metodos-html--y-text.js  -----')
    console.log($("#capa1").html());

    $("#capa2").text("otro <b>texto</b>...");
    $("#capa3").html("otro <script> alert('hola') <\/script> <b>texto </b>...");

})(jQuery);



