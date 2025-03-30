//  -------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ------------------
//  ----------  /07-manipulacion-basica-de-elementos/  ----------  
//  ----------  /01-selectores/  --------------------------------  
//  ----------  /assets/js/01-metodos-html-y-text.js  -----------
//  ------------------------------------------------------------- 


export const metodosHtmlYText = ($) => {

    console.log($("#capa1").html());

    $("#capa2").text("otro <b>texto</b>...");
    $("#capa3").html("otro <script> alert('hola') <\/script> <b>texto </b>...");

}
