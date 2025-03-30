//  --------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  -------------------
//  ----------  /08-selectores-jquery-y-traversing/  -------------  
//  ----------  04-partir-de-un-contexto  ------------------------  
//  ----------  /assets/js/04-partir-de-un-contexto.js  ----------
//  --------------------------------------------------------------


export const partirDeUnContexto = ($) => {

    $("#btn1").click(function () {
        $("#principal .grande").css("color", "red");
    });


    $("#btn2").click(function () {
        $("#principal > .grande").css("color", "red");
    });


    $("#btn3").click(function () {
        $(".grande", "#principal").css("background", "#ccf");    
    });


    $("#btn4").click(function () {
        $("#principal").find(".grande").css("color", "blue");
    });
       
}
