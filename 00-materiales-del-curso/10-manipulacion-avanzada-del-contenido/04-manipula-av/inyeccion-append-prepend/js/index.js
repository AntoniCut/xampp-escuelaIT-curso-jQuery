$(function(){
  $("<p class='p1'>texto del párrafo</p>").appendTo("div").css("background-color", "#ccc");
  $("<b>Negrita</b>").prependTo("div");
  
  $("div").append("<i>Italica</i>");
  $("div").prepend("<i>principio</i>");
});