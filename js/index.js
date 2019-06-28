//  !Progress bar
function initSkills() {
    $(".skill-progress span").each(function() {
        let bottom_of_object = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        let myVal = $(this).attr("data-value");
        let title = $(this)
            .parent()
            .parent()
            .children(":first-child");
        if (bottom_of_window > bottom_of_object) {
            $(this).css({
                width: myVal
            });
            title.css({
                width: myVal
            });
        }
    });
}

let waypoint = new Waypoint({
    element: document.getElementById("about-me"),
    handler: function() {
        initSkills();
    },
    offset: 200
});
