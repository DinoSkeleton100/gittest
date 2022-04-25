$(document).ready(function() {

    $('.cardContent').slideToggle();

    $('.cardTitle').on('click', function() {

        var cardId = $(this).attr('data-cardId');

        $('#content'+cardId).slideToggle(500);
    });

});