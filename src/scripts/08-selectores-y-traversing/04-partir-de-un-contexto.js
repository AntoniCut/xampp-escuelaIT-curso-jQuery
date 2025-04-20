/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /08-selectores-y-traversing/  ----------
    ----------  /04-partir-de-un-contexto.js  ----------
    ----------------------------------------------------
*/


(function ($) {


    console.log('\n');
    console.warn('----------  04-partir-de-un-contexto.js  ----------');


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


})(jQuery);


