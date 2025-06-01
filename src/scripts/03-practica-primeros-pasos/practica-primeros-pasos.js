/*
    ----------------------------------------------------
    ----------  /01-curso-jquery/  ---------------------
    ----------  /src/scripts/  -------------------------
    ----------  /03-practica-primeros-pasos/  ----------
    ----------  /practica-primeros-pasos.js  -----------
    ----------------------------------------------------
*/


$(document).ready(function () {

    console.log('\n')
    console.warn('-----  practica-primeros-pasos.js  -----')
    

    const $titulo = $('.titulo');
    const $anadir = $('#anadir');
    const $quitar = $('#quitar');


    $titulo.css('color', 'orange');
    $titulo.css('background-color', '#ffc');

    $anadir.click(cambiarTitular);

    $quitar.click(function () {
        $titulo.removeClass('titular');
    });

    function cambiarTitular() {
        $titulo.addClass('titular');
    }

});
