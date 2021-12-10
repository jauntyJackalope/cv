var startMusic = false;

$(document).ready(playMusic);



document.addEventListener('click', playMusic);


function playMusic(){
   const music1 = new Audio("ikawLang.mp3");
   if(!startMusic){ 
    music1.play();
    startMusic = true;
   }
}



$(window).scroll(function() {
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});
