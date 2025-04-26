$("a").on("click", function(e){
  e.preventDefault();
  var enlace = $(this);
  $("#anim").slideToggle(4000, function(){     var capa = $(this);
  
    if(capa.css("display") == "none"){
      enlace.text("Mostrar");
    }else{
      enlace.text("Ocultar");
    }
    /*
    if(enlace.text()=="Mostrar"){
      enlace.text("Ocultar");
    }else{
      enlace.text("Mostrar");
    }
    */
  }); 
});
