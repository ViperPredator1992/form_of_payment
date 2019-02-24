$('.grow-form label').click(function () {
    $('.grow-form label .radio').css('opacity', '1');
    $('.grow-form label').removeClass('focus');
    $(this).addClass('focus');
});