$('.grow-form label').click(function () {
    $('.grow-form label .radio').css('opacity', '1');
    $(this).addClass('focus');
    $('.grow-form label').removeClass('focus');
});

//, .grow-form label img