$("div").on("click", gestionClic);

function gestionClic(){
  $(this).text($(this).text() + " / primer evento clic");
}

$("div").on("click", function(){
  $(this).text($(this).text() + " / otro click");
});

$("div").one("mouseenter", function(){
  $(this).text($(this).text() + " / entraste");
});

//quitar todos los eventos
//$("div").off();

//quitar todos los manejadores de 1 tipo de evento
//$("div").off("click");

//quitar un manejador en concreto...
$("div").off("click", gestionClic);