$("div").mouseenter(function(e){
  $(this).text(e.pageX + " X " + e.pageY);
});