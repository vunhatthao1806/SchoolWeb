$(document).ready(function () {
    // $("a.go").click(function () {
    //     $("html, body").animate({
    //         scrollTop: 0,
    //     });
    // });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $("a.go").fadeIn();
        } else {
            $("a.go").fadeOut();
        }
    });
    $("a.mail").click(function () {
        $("div.mainform").show();
    });
    $(".close").click(function () {
        $("div.mainform").hide();
    });
});

const goToTop = document.querySelector(".go");
console.log(goToTop);
goToTop.onclick = function () {
    window.scroll(0, 0);
};
