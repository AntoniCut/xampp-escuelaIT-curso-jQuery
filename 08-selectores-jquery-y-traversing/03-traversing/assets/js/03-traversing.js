//  -----------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ----------------
//  ----------  /08-selectores-jquery-y-traversing/  ----------  
//  ----------  /03-traversing/  ------------------------------  
//  ----------  /assets/js/03-traversing.js  ------------------
//  ----------------------------------------------------------- 


export const traversing = ($) => {


    //  -----  Hijos de p  -----
    $("#btn1").click(function () {

        $("p")
            .children()
            .css("color", "red");

        $("p")
            .children()
            .each(function (index) {
                console.log('texto del p ', (index + 1), ' - ', $(this).text());
            });

    });


    //  -----  Hermanos de p  -----
    $("#btn2").click(function () {

        $("p")
            .siblings()
            .css("color", "green");
    });


    //  -----  Hermanos de p que sean etiquetas div  -----
    $("#btn3").click(function () {

        $("p")
            .siblings("div")
            .css("color", "orange");
    });


    //  -----  Hermanos de p que sean etiquetas div y eliminar div con id = undiv  -----
    $("#btn4").click(function () {

        $("p")
            .siblings("div")
            .not("#undiv")
            .css("color", "purple");
    });


    //  -----  Buscar en la tabla elementos con la clase .miclase y los primeros td  -----
    $("#btn5").click(function () {

        console.log('Nº de tablas: ', $("table").length);

        $("table")
            .find(".miclase")
            .css("background-color", "orange");

        $("table")
            .find("tr:first")
            .css("background-color", "blue");
    });


    //  -----  Filtrar todos los td y te quedas con los de la clase .c2  -----
    $("#btn6").click(function () {

        console.log('Nº de TDs', $("td").length);

        $("td")
            .filter(".c2")
            .css("background-color", "grey");
    });


    //  -----  Desde el LI que tiene class="miclase" acceder a la división con texto "división amiga!!" - Forma 1  -----
    $("#btn7").click(function () {

        $("li.miclase")
            .parent()
            .parent()
            .next()
            .css("color", "#3f9");

    });


    //  -----  Desde el LI que tiene class="miclase" acceder a la división con texto "división amiga!!" - Forma 2  -----
    $("#btn8").click(function () {

        $("li.miclase")
            .parents("div")
            .next()
            .css("color", "#3f9");
    });


    //  -----  Buscar las negritas de las ul  -----
    $("#btn9").click(function () {

        $("ul")
            .find("b")
            .css("color", "#00f");
    });


    //  -----  Ocultar los elementos de ul y li con la clase .milista  -----
    $("#btn10").click(function () {

        $("ul", "li")
            .filter(".milista")
            .hide(10000);
    });


    //  -----  Cambiar estilos a los ul con la clase .milista  -----
    $("#btn11").click(function () {

        $("ul")
            .find(".milista")
            .css("font-size", "3em");
    });


    //  -----  Border a los elementos cuyo id contenga la palabra id  -----
    $("#btn12").click(function () {

        $("[id^='id']")
            .css("border", "2px solid red");
    });

}
