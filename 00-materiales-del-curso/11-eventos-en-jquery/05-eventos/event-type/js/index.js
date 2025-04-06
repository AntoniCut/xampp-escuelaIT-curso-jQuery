$("a").on("click mouseenter mouseleave", gestionaVariosEventos);

function gestionaVariosEventos(evento){
  $(this).text(evento.type);
}