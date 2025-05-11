$("div")
    .slideUp(4000)
    .slideDown(4000)
    .animate({
        fontSize: "24pt"
    }, 4000)
    .animate({
        fontSize: "12pt"
    }, 4000)
    .on("click", function () {
        //$(this).stop(true, true);
        $(this).finish()
    });

$("p").animate({
    fontSize: "24pt"
}, 4000)
    .animate({
        fontSize: "12pt"
    }, 4000)