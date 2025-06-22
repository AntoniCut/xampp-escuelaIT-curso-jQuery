$("#destino img").each(function(){
  var imgActual = $(this);
  var alt = imgActual.attr("alt");
  var p = $("<p>").text(alt).addClass("piefoto");
  imgActual.after(p);
})