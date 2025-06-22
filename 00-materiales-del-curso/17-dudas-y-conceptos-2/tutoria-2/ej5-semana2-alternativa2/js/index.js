/*
$("#destino img").each(function(){
  var imgActual = $(this);
  var tam = imgActual.width();
  var alt = imgActual.attr("alt");
  var p = $("<p>").text(alt).addClass("piefoto").css("width", tam);
  //imgActual.after(p);
  p.insertAfter(imgActual);
}).on("mouseenter", function(){
  var img =$(this);
  img.next().slideDown(2000);
}).on("mouseleave", function(){
  var img =$(this);
  img.next().slideUp(2000);
});
*/

$("#destino img").each(function(indice){
  var imgActual = $(this);
  var tam = imgActual.width();
  var alt = imgActual.attr("alt");
  var p = $("<p>").text(alt).addClass("piefoto").css("width", tam);
  imgActual.data("pie", p);
  //imgActual.after(p);
  p.insertBefore(imgActual); 
}).on("mouseenter", function(){
  var img =$(this);
  img.data("pie").slideDown(2000);
}).on("mouseleave", function(){
  var img =$(this);
  img.data("pie").slideUp(2000);
});
