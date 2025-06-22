$("#destino img").each(function(){
  var imgActual = $(this);
  imgActual.wrap("<div>");
  var alt = imgActual.attr("alt");
  var p = $("<p>").text(alt).addClass("piefoto");
  imgActual.parent().append(p);
})