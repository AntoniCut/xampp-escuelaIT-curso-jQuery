$(function(){
  $("<b>negrita</b>").insertBefore("div");
  $("<b>después</b>").insertAfter("div");
  
  $("div").after("<p>hola</p>");
  $("div").before("<p>hola antes</p>");
  
});