$("span").click(manejador);

$(document).click(manejador);

function manejador(e){
  console.log("current target: ", e.target);
  console.log("this: ", this);
  $("#salida").html($("#salida").html() + "<br>Has hecho click " + e.target + " " + e.currentTarget);
  e.stopPropagation();
  //return false;
}

$("p").click(function(e){
  $(e.target).css("color", "red"); 
  e.stopPropagation();
});

$("div").click(function(){
  $(this).css("background-color", "green");
});