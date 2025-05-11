
function moverBucle() {
    var elem = $("#capa");
    var tamVentana = $(window).width();
    var tamElemento = elem.width();
    elem.animate({
        left: (tamVentana - tamElemento - 15) + "px"
    }, 2000);
    elem.fadeOut();
    elem.delay(1000);
    elem.fadeIn();
    elem.animate({
        left: "10px"
    }, 2000);
    elem.delay(1000);
    elem.queue(function (sig) {
        if (elem.data("vueltas")) {
            elem.data("vueltas", elem.data("vueltas") + 1);
        } else {
            elem.data("vueltas", 1);
        }
        elem.text(elem.data("vueltas"));
        moverBucle();
        sig();
        //$(this).dequeue();
    });
}

moverBucle();

$("#capa").click(function () {
    $(this)
        .stop(true, false)
        .fadeOut();

});
