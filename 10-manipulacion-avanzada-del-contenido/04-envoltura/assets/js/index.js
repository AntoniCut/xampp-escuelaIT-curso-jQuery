//  -----------------------------------------------------------------
//  ----------  /curso-jquery-escuela-it.com/  ----------------------
//  ----------  /10-mainipulacion-avanzada-del-contenido/  ----------
//  ----------  /04-envoltura/  -------------------------------------
//  ----------  /assets/js/index.js  --------------------------------
//  -----------------------------------------------------------------


export const envoltura = ($) => {

    $(".x")
        .wrap("<article> </article>");

    $("article")
        .wrap("<section> </section>");


    $("b")
        .unwrap()
        .unwrap();

}
