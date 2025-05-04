$("div").click(function(){
  var elem = $(this);
  elem
    .slideUp(2000)
    .delay(1000)
    .slideDown(2000)
    .queue(function(sig){
      miAnimacion(this);
      sig();
    })
    .queue(function(){
      $(this)
        .css("background-color", "#9f9")
        .text("cambiar el texto")
        .dequeue();
    })
    .animate({
      fontSize: "24pt"
    }, 2000)
    .queue(function(siguiente){
      $(this).css("color", "#fff");
      siguiente();
    })
    .animate({
      fontSize: "12pt"
    }, 2000)
  elem.text("Tienes encoladas " + elem.queue().length + " funciones...");
})

function miAnimacion(elem){
  console.log(elem)
  $(elem).animate({
    "border-width": "10px"
  }, 2000);
}