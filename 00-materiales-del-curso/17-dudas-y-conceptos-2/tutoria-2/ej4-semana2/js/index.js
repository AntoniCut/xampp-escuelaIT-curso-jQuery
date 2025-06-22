$("#control").on("click", function(e){
  e.preventDefault();
  //$("#menu").slideDown(1000).delay(3000).slideUp(1000);
  $("#menu").slideDown(8000, function(){
    setTimeout(ocultar, 3000);
  });
})

function ocultar(){
  $("#menu").slideUp(1000);
}