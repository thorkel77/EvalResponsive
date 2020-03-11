jQuery( function ($) {
    $('.header-nav__wrapper').on('click', function (){
      //  $('.nav--responsive').toggle();
       $('.nav-responsive').addClass('is-open');
       $('.overlay').toggle();
       $('.header-nav-burger').addClass('is-animate');
       setTimeout(function (){
           $('.overlay').addClass('is-open');
       }, 500);
        $('body').addClass('overflow');
    });

    $('.overlay').on('click', function (){
        //$('.nav--responsive').toggle();
        $('.nav-responsive').removeClass('is-open');
        $('.overlay').toggle();
        $('.header-nav-burger').removeClass('is-animate');
        $('body').removeClass('overflow');

    });
    
    var heroHeight;
    var headerHeight;
    var screenHeight;
    
 function resizeHeader() {
    screenHeight= $(window).height();
    headerHeight=$('.header-main').innerHeight();
    calculatedHeroHeight = screenHeight - headerHeight;
   
    
 }
    
    $(window).resize(
        resizeHeader
    )}
)
