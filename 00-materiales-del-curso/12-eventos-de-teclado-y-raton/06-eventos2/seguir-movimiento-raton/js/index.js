$(document).mousemove(function(evento){
  var capa = $("#moverse");
  capa.css({
    top: evento.pageY+ "px",
    left: evento.pageX + "px",
  })
});