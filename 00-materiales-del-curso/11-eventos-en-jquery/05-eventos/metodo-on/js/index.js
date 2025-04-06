$("div").on("click", function(){
  //codigo a ejecutar cuando se produzca el click
  var elem = $(this);
  if(elem.data("textoanterior")){
    texto = elem.data("textoanterior");
  }else{
    texto = "hiciste clic"
  }
  elem.data("textoanterior", elem.text());
  elem.text(texto);
});