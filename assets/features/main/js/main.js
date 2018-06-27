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

  $(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
  });