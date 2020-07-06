$(document).ready(function () {
    $('#navbar li a').click(function (e) {

        const headerHeight = $('.navbar').outerHeight();
        const padding = 40;

        const targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - (headerHeight + padding)
        }, 1000);

        e.preventDefault();
    });
});

document.querySelector("#resumeButton").addEventListener("click", () => {
    window.open(
        "heidi-sprouse_resume.pdf", "_blank");
})