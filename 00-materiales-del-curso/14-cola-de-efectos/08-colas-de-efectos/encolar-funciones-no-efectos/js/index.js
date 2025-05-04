$("div")
  .slideUp(4000)
  .slideDown(4000)
  .queue(function(){
    $(this)
      .css("background-color", "#9f9")
      .text("cambiar el texto")
      .dequeue();
  })
  .animate({
    fontSize: "24pt"
  }, 4000)
  .queue(function(siguiente){
    $(this).css("color", "#fff");
    siguiente();
  })
  .animate({
    fontSize: "12pt"
  }, 4000)
  .on("click", function(){
    $(this).stop(true, true);
    //$(this).finish()
    var cola = $(this).queue();
    console.log(cola);
    $("div").text("tienes " + cola.length + " funciones encoladas");
    $(this).dequeue();
  });
