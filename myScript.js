$(document).ready(function() {

    $('.cardContent').slideToggle();

    $('.cardTitle').on('click', function() {
        $('.cardContent').slideToggle(500);
        $('.card').slideToggle(500);
        $('.card').toggleClass('cardBig');
        $('.card').slideToggle();
    });

});