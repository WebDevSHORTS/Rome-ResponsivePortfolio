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
