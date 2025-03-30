//  -----------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------
//  ----------  /08-selectores-jquery-y-traversing/  ----------  
//  ----------  /01-selectores/  ------------------------------  
//  ----------  /assets/js/01-selectores.js  ------------------
//  ----------------------------------------------------------- 


export const selectores = ($) => {

    $("#btn1").click(function() {
        $("p span").css("color", "blue");
    });

    $("#btn2").click(function() {
        $("p > span").css("color", "red");
    });

    $("#btn3").click(function() {
        $("div ~ p").css("color", "orange");
    });

    $("#btn4").click(function() {
        $("p:not(#p2)").css("color", "green");
    });

    $("#btn5").click(function() {
        
        $("p:first-child").css({
            "font-size": "2em",
            "border": "1px solid #445",
            "background-color": "#ffc"
        });
    });

    $("#btn6").click(function() {
        
        $("p:contains('probando')").hide(3000);
    });
       
}
