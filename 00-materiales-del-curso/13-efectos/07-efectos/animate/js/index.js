$("form").on("submit", function(e){
  e.preventDefault();
  var tamtexto = $("#tamtexto").val();
  var tamcaja = $("#tamcaja").val();
  var padding = $("#padding").val();

  $(this).animate({
    "font-size": tamtexto,
    "width": tamcaja,
    padding: padding
  }, 4000);
  // podría encolar otros efectos... lo veremos mañana
  //$(this).hide(3000);
});