$(".capa").animate({
  top: "100px",
  left: "300px"
}, 10000, function(){
  //alert("terminé");
  console.log($(".pos").offset());
  console.log($(".pos").position());
});

console.log($("#p1").offset());
console.log($(".pos").offset());
console.log($(".pos").position());

$("#p1").on("click", function(){
  var scrollActual = $(window).scrollTop();  
  alert("El scroll actual de la ventana es: " + scrollActual);
});

$("#b1").on("click", function(){
  //calculo la posicion del párrafo 1
  var posicionParrafo = $("#p1").offset().top;
  $("html, body").animate({
    scrollTop: posicionParrafo
  }, 5000);
  //$("html, body").scrollTop(posicionParrafo);
});

