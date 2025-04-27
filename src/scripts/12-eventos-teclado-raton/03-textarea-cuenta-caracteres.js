/*
    ---------------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ---------------
    ----------  /src/scripts/  ------------------------------
    ----------  /12-eventos-teclado-raton/  -----------------
    ----------  /03-textarea-cuenta-caracteres.js  ----------
    ---------------------------------------------------------
*/


(function ($) {

    console.log('\n');
    console.warn('----------  03-textarea-cuenta-caracteres.js  ----------');


    //  -----  referencias al HTML  -----
    const $textArea = $("#textArea");
    const $mensaje = $("#mensaje");
    const $cuentaCaracteres = $("<div class='cuenta-caracteres'> Llevas escritos <span> </span> caracteres </div>");
    
    $cuentaCaracteres.insertAfter($textArea);


    //  -------------------------------
    //  ----------  EVENTOS  ----------
    //  -------------------------------


    //  -----  eventos tecla pulsada, presionada y soltada  -----
    $textArea.on("keydown keypress  keyup", function (e) {
        
        acumulaMensaje(e.type);
        calcularCaracteresTextarea();
        
        console.log('e.type', e.type ,' - e.wich', e.which);

    });


    //  -----  eventos tecla presionada  -----
    $textArea.on("keypress", function (e) {

        const maximo = $(this).data("maximo");
        let texto = "";

        acumulaMensaje(e.which);
        calcularCaracteresTextarea();

        //  -----  si se llega al valor máximo de caracteres y la tecla suprimir y de retroceso  -----
        if ( $(this).val().length == maximo && (e.which != 0 && e.which != 8) ) {
            e.preventDefault();
        }

        //  -----  si se ha pulsado la tecla SHIFT  -----
        if (e.shiftKey) {
            texto += " SHIFT + ";
            e.stopPropagation();
        }
        
        //  -----  si se ha pulsado la tecla CTRL  -----
        if (e.ctrlKey) {
            texto += " CTRL + ";
            e.stopPropagation();
        }
        
        //  -----  pasamos el código de la tecla a string y lo concatenamos al texto  -----
        texto += String.fromCharCode(e.which);
        acumulaMensaje(" - " + texto + " - ");

    });


    //  -----  eventos tecla soltada  -----
    $textArea.on("keyup", function (e) {
        
        acumulaMensaje(" - " + String.fromCharCode(e.which) + " - ");
        acumulaMensaje($textArea.val());
        calcularCaracteresTextarea();
        
    });


   
    //  ---------------------------------
    //  ----------  FUNCIONES  ----------
    //  ---------------------------------


    //  -----  Acumula las pulsaciones de las teclas y las muestra en la capa mensaje  -----
    function acumulaMensaje(texto) {

        const textoAntiguo = $mensaje.text();
        
        $mensaje.html(`${textoAntiguo} ${texto} &nbsp; &nbsp; `);

    }


    //  -----  Calcula el número de caracteres que hay escritos en el textarea  -----
    function calcularCaracteresTextarea() {

        const numeroCaracteres = $textArea.val().length;
        
        $cuentaCaracteres.find("span").text(numeroCaracteres);

    }


    //  -----  al iniciar  -----
    calcularCaracteresTextarea();


})(jQuery);
