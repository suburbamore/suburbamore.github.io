var lastScrollTop = 0;
var theWrap = $('.wrap');
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       theWrap.removeClass('sticky');
   } else {
      // upscroll code
       theWrap.addClass('sticky');
   }
   lastScrollTop = st;
});