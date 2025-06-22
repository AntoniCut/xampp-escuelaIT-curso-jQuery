var pos = $("#midiv").offset().top;
//alert(pos);

$(window).on("scroll", function(){
	var w = $(window);
  var posW = w.scrollTop();
  if((posW + w.height() - 100) >= pos){
    $("#midiv").css("background-color", "red");
  }
  $("#midiv").text(posW + w.height());
});