$("div")
  .slideUp(4000)
  .slideDown(4000)
  .animate({
    fontSize: "24pt"
  }, 4000)
  .animate({
    fontSize: "12pt"
  }, 4000)
  .on("click", function(){
    //$(this).stop(true, true);
    $(this).finish()
    console.log(cola);
    $("div").text("tienes " + cola.length + " funciones encoladas");
  })
  
var cola = $("div").queue();
console.log(cola);
$("div").text("tienes " + cola.length + " funciones encoladas");

$("p").animate({
    fontSize: "24pt"
  }, 4000)
  .animate({
    fontSize: "12pt"
  }, 4000)