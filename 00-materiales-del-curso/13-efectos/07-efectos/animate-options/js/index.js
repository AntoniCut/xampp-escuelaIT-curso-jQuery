$("a").on("click", function (e) {
    e.preventDefault();
    var enlace = $(this);

    var capa = $("#anim");
    capa.css("overflow", "hidden");
    /*capa.animate({
      width: 0,
      padding: 0
    }, 5000, function(){
      capa.css("display", "none");
    });
    */
    capa.animate({
        width: 0,
        padding: 0
    }, {
        duration: 5000,
        complete: function () {
            capa.css("display", "none");
        },
        step: function () {
            capa.text(capa.width());
        },
        easing: "easeInElastic"
    });

});
