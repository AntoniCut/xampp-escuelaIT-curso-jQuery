var ciudades = ["Madrid", "Barcelona", "Valencia"];

var lista = $("<ul>");
var max = ciudades.length;
var elemento;
for(var i=0; i<max ; i++){
  elemento = $("<li>").text(ciudades[i]).appendTo(lista);
}

lista.appendTo("body");
