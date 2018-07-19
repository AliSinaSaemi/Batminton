/*=======================

        owl-Carousel.js
 
=======================*/

$('#owl-one').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay:true,
  autoplayTimeout:10000,
  smartSpeed: 900,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$('#owl-two').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  autoplay:false,
  autoplayTimeout:15000,
  nav: true,
  smartSpeed: 1000,
  navText: ["<i class='fa fa-arrow-right'></i>", "<i class='fa fa-arrow-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$('#owl-three').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  autoplay:true,
  autoplayTimeout:15000,
  nav: true,
  smartSpeed: 1000,
  navText: ["<i class='fa fa-arrow-right'></i>", "<i class='fa fa-arrow-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
$('#owl-four').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  autoplay:false,
  autoplayTimeout:10000,
  nav: true,
  smartSpeed: 1000,
  navText: ["<i class='fa fa-arrow-right'></i>", "<i class='fa fa-arrow-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$('#owl-five').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  autoplay:true,
  autoplayTimeout:10000,
  nav: true,
  smartSpeed: 1000,
  navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});


/*=======================

        Sticky.js
 
=======================*/

$(document).ready(function(){
  $(".navbar").sticky({topSpacing:0});
});

/*=======================

        sidenav.js
 
=======================*/
$('.sa-header-button').click(function (e) {
  e.preventDefault();
  $('.cssmenu').addClass('cssmenuShow');
});

$('.sa-close-btn').click(function () {
  $('.cssmenu').removeClass('cssmenuShow');
});

/*=======================

      liked or like
 
=======================*/

$(document).ready(function(){
  $(".like").click(function () {
    $(this).toggleClass("liked");
  });
});

/*=======================

      put comment
 
=======================*/


