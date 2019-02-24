$('.grow-form label').click(function () {
    // $('.grow-form label .radio').removeClass('active');
    // $(this).addClass('active');
    $('.grow-form label').removeClass('focus');
    $(this).addClass('focus');
});
$('.grow-form label .radio').click(function () {
    $('.grow-form label .radio').removeClass('active');
    $(this).addClass('active');
});