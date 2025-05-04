var enlace = $("#enlace")
.on("mouseenter", function(e){
  var tip = $("#tip")
    .stop()
    .show(2000)
    .css({
      top: (e.pageY + 5) + "px",
      left: (e.pageX  + 5) + "px"
    });
})
.on("mouseleave", function(){
  var tip = $("#tip")
  .stop()
  .hide(2000);
});