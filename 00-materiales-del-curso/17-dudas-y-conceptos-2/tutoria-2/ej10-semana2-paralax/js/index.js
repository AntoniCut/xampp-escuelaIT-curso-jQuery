var pos = $("#midiv").offset().top;
//alert(pos);

$(window).on("scroll", function(){
	var w = $(window);
  var div = $("#midiv");
  var posW = w.scrollTop();
  if((posW + w.height() - 100) >= pos){
    div.css("background-color", "red");
  }
  if((posW + w.height() - 10) >= pos){
    div.css("left", (posW + w.height() - pos) + "px")
  }
  div.text(posW + w.height());
});