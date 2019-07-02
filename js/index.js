//  !Progress bar
function initSkills() {
    $(window).scroll(function() {
        $(".skill-progress span").each(function() {
            let myVal = $(this).attr("data-value");

            $(this).css({
                width: myVal
            });
        });
    });
}

let waypoint = new Waypoint({
    element: document.getElementById("about-me"),
    handler: function() {
        initSkills();
    },
    offset: "50%"
});

//  !Fixed navbar on scroll
$(window).scroll(function() {
    console.log("scrolling");
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});

//  !Handling Hamburger menu
let $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
});
