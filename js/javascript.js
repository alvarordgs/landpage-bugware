$(document).ready(function() {
    // Exibe ou oculta o botão
    if($(window).scrollTop() == 0)
        $('#upKey').fadeOut(0);

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#upKey').css({
                "opacity" : "0.7"
            });
            $('#upKey').fadeIn(200); 
        } else {
            $('#upKey').fadeOut(200);
        }
    });

    // Faz animação para subir
    $('#upKey').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })
});