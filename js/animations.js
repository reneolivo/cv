$(function () {
    $('.sectionTitle').fadeOut();
    $('.sectionContent').fadeOut();
    $('.sectionTitle').fadeIn(600, function () {
        $('.sectionContent').fadeIn(600);
    });
});