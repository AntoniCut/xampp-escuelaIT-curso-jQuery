$(document).on("contextmenu", function(e){
  e.preventDefault();
  var menu = $("#menu");
  menu.css({
    "display": "block",
    "top": e.pageY + "px",
    "left": e.pageX + "px"
  });
  var retardo = setTimeout(function(){
    menu.css({
      "display": "none"
    });
  }, 2000);
  clearTimeout(retardo);
});

$(document).on("mousedown", function(e){
  console.log(e.which);
  
});