$(document).ready(function(){
    $(".mytopslider").owlCarousel({
      loop: true,
      autoplay:true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  });