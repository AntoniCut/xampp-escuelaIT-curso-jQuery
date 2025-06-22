$("#checkbox").click(function(){
  /*
  if($(this).prop("checked")){
    $("textarea, input[type='text']").prop("disabled", true);
  }else{
    $("textarea, input[type='text']").prop("disabled", false);
  }
  */
  
  $("textarea, input[type='text']").prop("disabled", $(this).prop("checked"));
});


/*
$("#chkDeshabilitar").on("click", function(){
  $("input:text, textarea").prop("disabled",$("#chkDeshabilitar").prop("checked"));});
 */