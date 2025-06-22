$(document).on("contextmenu", function(e){
  e.preventDefault();
  var menu = $("#menu");
  menu.css({
    "display": "block",
    "top": e.pageY + "px",
    "left": e.pageX + "px"
  });
  var retardo = ocultaRetardo(menu);
  menu.on("mouseenter", function(){
  	clearTimeout(retardo);  
  });
  menu.on("mouseleave", function(){
    retardo = ocultaRetardo(menu);
  })
  
});

$(document).on("mousedown", function(e){
  console.log(e.which);
  
});

function ocultaRetardo(menu){
  var retardo = setTimeout(function(){
    menu.css({
      "display": "none"
    });
  }, 2000);
  return retardo;
}