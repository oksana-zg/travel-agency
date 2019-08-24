// всплывающее окно (низ)

$('.window-button, .window-cross-button').click(function() {
    $('.window').animate ({
        'bottom':'-150px'
    },1000);
    return false;
});