/*smooth scrolling*/
/* function smooths(target, duration) {
    var targ = document.querySelector(target);
    var targPos = targ.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var dist = targPos - startPos;
    var startTime = null;

    function anim(currentT) {
        if (startTime === null)
            startTime = currentT;
        var timeElapsed = currentT - startTime;
        var run = easeinq(timeElapsed, startPos, dist, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration)
            requestAnimationFrame(anim);
    }

    function easeinq(t, b, c, d) {
        t /= d;
        return c * t * t * t * t + b;
    };
    requestAnimationFrame(anim);
}

var v = document.querySelector()

var v1 = document.querySelector('.section1');
var v2 = document.querySelector('.section2');

v1.addEventListener('click', function() {
    smooths(v2, 500);
}) */

/*function parallax*/



var vh = window.innerHeight;

/* window.addEventListener("scroll", function() {
    var Yoff = (window.pageYOffset) % (vh);
    var scrr = vh - Yoff;
    window.scroll(0, scrr);
}) */