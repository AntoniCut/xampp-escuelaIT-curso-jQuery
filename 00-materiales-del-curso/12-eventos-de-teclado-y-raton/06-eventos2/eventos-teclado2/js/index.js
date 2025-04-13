var ta = $("#ta");

ta.on("keypress keydown keyup", function(e){
  acumulaMensaje(e.type);
});

ta.on("keyup", function(e){
  acumulaMensaje("-" + String.fromCharCode(e.which) + "-")
  acumulaMensaje(ta.val());
});
ta.on("keypress", function(e){
  var texto = ""
  if(e.shiftKey){
    texto += "SHIFT+";
    e.stopPropagation();
  }
  if(e.ctrlKey){
    texto += "CTRL+";
  }
  texto += String.fromCharCode(e.which);
  acumulaMensaje("-" + texto + "-");
  
});

function acumulaMensaje(texto){
  var msg = $("#mensaje");
  //msg.text(msg.text() + " " + texto);
  var textoAntiguo = msg.text();
  msg.text(textoAntiguo + " " + texto);
}

$(document).on("keydown", function(e){
  console.log("akkiiiii");
  console.log(e.which);
});

ta.on("keydown", function(e){
  //console.log("HOLA!!!!");
  if(e.shiftKey){
    //console.log("parate!!!!");
    e.stopPropagation();
  }
});