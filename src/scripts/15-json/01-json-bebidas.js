/*
    ----------------------------------------------------
    ----------  /01-curso-jquery-escuela-it/  ----------
    ----------  /src/scripts/  -------------------------
    ----------  /15-json/  -----------------------------
    ----------  /01-json-bebidas.js  -------------------
    ----------------------------------------------------
*/


//  -----  JSON de bebidas  -----
const bebidas = {

    "bebida": "Cerveza",
    "inicioProduccion": "3500 a.c.",
    
    "ingredientes": [
        "lupulo", 
        "cebada", 
        "agua", 
        "trigo", 
        "malta"
    ],

    "marcas": [

        {
            "nombre": "San Miguel",
            "tipo": "pilsen",
            "procedencia": "España"
        },

        {
            "nombre": "Kölsch",
            "tipo": "Estilo Alemán",
            "procedencia": "Colonia"
        },

        {
            "nombre": "Guinness",
            "tipo": "Negra",
            "procedencia": "Irlanda"
        }
    ]

};


//  ----------  funcionalidad jQuery  ----------

(function ($) {

    console.log('\n');
    console.warn('----------  01-json-bebidas.js  ----------');

    //  -----  referencias al HTML  -----
    const $bebida = $('#bebida');
    const $inicio = $('#inicio');
    const $ingredientes = $('#ingredientes');
    const $tablaMarcas = $('#tablaMarcas');

    //  -----  variables  -----
    const arrIngredientes = [];
    const arrMarcas = [];


    //  -----  encabezados  -----
    $bebida.text(`Bebida: ${bebidas.bebida}`);
    $inicio.text(bebidas.inicioProduccion);


    //  -----  Ingredientes  -----
    bebidas.ingredientes.forEach(ing => arrIngredientes.push(`<li> - ${ing} </li>`));
    $ingredientes.append(arrIngredientes);


    //  -----  Marcas  -----
    bebidas.marcas.forEach(marca => {
        
        arrMarcas.push(`
            <tr>
                <td>${marca.nombre}</td>
                <td>${marca.tipo}</td>
                <td>${marca.procedencia}</td>
            </tr>
        `);
    });
    
    $tablaMarcas.append(arrMarcas);


})(jQuery);
