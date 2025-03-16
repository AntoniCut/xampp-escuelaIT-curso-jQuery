$(function(){
  //$("<hr>").insertAfter(".item");
  $(".item").after("<hr>");
  
  //generar enlace
  var enlace = $('<a href="#">Marcar como spam</a>').css("color", "#004");
  
  enlace.on("click", function(evento){
    evento.preventDefault();
    var enlace = $(this);
    var coment = enlace.parent().prev();
    var idcoment = coment.data("idcomentario");
    console.log("comentario", idcoment);
    console.log(this);
    alert("Estás marcando como spam el comentario " + idcoment);
    //enlace.empty();
    enlace.remove();
  });

  var comentario = $(".coment");
  comentario.after(enlace);
  comentario.next().wrap("<b>").css("font-size", "80%");
  
});