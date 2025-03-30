//  -------------------------------------------------------------  
//  ----------  /curso-jquery-escuela-it.com/  ------------------
//  ----------  /07-manipulacion-basica-de-elementos/  ----------  
//  ----------  /02-formularios/  --------------------------------  
//  ----------  /assets/js/02-formularios.js  --------------------
//  ------------------------------------------------------------- 


export const formularios = ($) => {


    //  ------  referencias al HTML  -----
    const $form = $("form");
    const $nombre = $("#fnombre");
    const $check = $("#checkav");
    const $bloqueAvanzado = $("#bloqueavanzado");
    const $cerrar = $("#bloqueavanzado a");


    //  -----  Información por consola  -----
    console.log('\n');
    console.log('Formulario 1:', $form.eq(0).attr('action'));
    console.log('Formulario 2:', $form.eq(1).attr('action'));

    console.log('\n');
    $form.each(function (index, element) {
        console.log(`Formulario ${index + 1}:`, $(element).attr('action'));
    });

    console.log('\n');
    console.log('$form.eq(1).attr("action") =>', $form.eq(1).attr("action"));
    console.log('$check.prop() =>', $check.prop("checked"));
    console.log("$check.attr() =>", $check.attr("checked"));


    //  -----  función para mostrar y ocultar  -----
    function mostrarOcular() {

        if ($check.prop("checked"))
            $bloqueAvanzado.css("display", "block");
        else
            $bloqueAvanzado.css("display", "none");
    }


    //  -----  eventos 'click'  -----

    $check.on("click", mostrarOcular);

    $cerrar.on("click", function () {
        $check.prop("checked", false);
        mostrarOcular();
    });


    //  -----  evento 'focus'  -----
    $nombre.on('focus', function () {
        $(this).val('');
    })


    //  -----  evento 'change'  -----
    $nombre.on("change", function () {

        //  -----  'this', atajo acceder al elemento actual (contexto)  -----
        const campo = $(this);
        const texto = campo.val();

        //  -----  Elimina el mensaje de error si ya existe  -----
        campo.next("span").remove();

        if (texto.length < 4) {
            campo.addClass("error");
            campo.after('<span style="color:red; margin-left: 10px;"> Introduce más de 4 caracteres </span>');
        } else {
            campo.removeClass("error");
        }
    });


    //  -----  se ejecuta al iniciar la página  -----
    mostrarOcular();


}
