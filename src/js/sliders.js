var config = {
  init: true,
  speed: 400,
  grabCursor: true,
  autoHeight: false,
  slidesPerView: 1,
  slideActiveClass: 'active',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  touchEventsTarget: '.swiper-container',
  observer: true,
};

var giftSlider, advantageSlider, distributeSlider, certificateSlider;

var IS_MOBILE = window.matchMedia("only screen and (max-width: 760px)");

window.onload = function () {
  if (IS_MOBILE.matches)  {
    // giftSlider = new Swiper('.gift__list-container', config);
  
    advantageSlider = new Swiper('.advantage__list-container', config);
  
    certificateSlider = new Swiper('.certificate__list-container', config);
  
    // config.slidesPerView = 2;
    // distributeSlider = new Swiper('.distribute__list-container', config);
  
  } else {
    return;
  }
};

window.addEventListener('resize', function () {
  giftSlider.update();
  advantageSlider.update();
  distributeSlider.update();
});
