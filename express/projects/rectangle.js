var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function (details) {
    var rectangleLoaction = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLoaction.left;

    if (insiderectval < rectangleLoaction.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectangleLoaction.width / 2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        });
    }
    else {
        var bluecolor = gsap.utils.mapRange(rectangleLoaction.width / 2, rectangleLoaction.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    });
});