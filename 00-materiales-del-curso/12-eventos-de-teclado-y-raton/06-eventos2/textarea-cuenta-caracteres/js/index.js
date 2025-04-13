var ta = $("#ta");
var cuenta = $("<div>Llevas escritos <span></span> caracteres</div>");
cuenta.insertAfter(ta);
calcularCaracteresTextarea(ta);


function calcularCaracteresTextarea(ta){
  var num = ta.val().length;
  var cuenta = ta.next();
  cuenta.find("span").text(num);
}

ta.on("keypress", function(e){
  var ta = $(this);
  var max = ta.data("maximo");
  acumulaMensaje(e.which);
  calcularCaracteresTextarea(ta);
  if(ta.val().length == max && (e.which!=0 && e.which!=8)){
    e.preventDefault();
  }
});

ta.on("keyup", function(){
  var ta = $(this);
  calcularCaracteresTextarea(ta);
});

ta.on("keypress keydown keyup", function(e){
  acumulaMensaje(e.type);
});

/*
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
*/
function acumulaMensaje(texto){
  var msg = $("#mensaje");
  //msg.text(msg.text() + " " + texto);
  var textoAntiguo = msg.text();
  msg.text(textoAntiguo + " " + texto);
}

