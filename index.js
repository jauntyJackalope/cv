var startMan = false;

$(document).ready(musicPlay);



document.addEventListener('click', musicPlay);

function musicPlay() {
  if(!startMan){
    var musicStart = new Audio("ikawLang.mp3");
      if (typeof musicStart.loop == 'boolean')
    {
    musicStart.loop = true;
    }
    else
    {
    musicStart.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    }
    musicStart.play();
    startMan = true;
    document.removeEventListener('click', musicPlay);
    }
}

$(window).scroll(function() {
    musicPlay();
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
