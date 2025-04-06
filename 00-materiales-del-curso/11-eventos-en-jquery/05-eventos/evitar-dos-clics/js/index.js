$("span").one("click", manejador);

function manejador(e){
  console.log(e.which);
  console.log("current target: ", e.target);
  console.log("this: ", this);
  $("#salida").html($("#salida").html() + "<br>Has hecho click " + e.target + " " + e.currentTarget);
  e.stopPropagation();
  //return false;
  setTimeout(function(){
    $("span").one("click", manejador);
  }, 2000)
}