$("form").on("submit", function(e){
  e.preventDefault();
  //seria lo normal $("#texto")
  // o $("input[type=text]")
  var texto = $(this).find("input").eq(0).val();
  var division = $("<div>" + texto + "</div>");
  division.appendTo("body");
})