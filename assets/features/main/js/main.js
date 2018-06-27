$('#owl-one').owlCarousel({
  rtl: true,
  loop: true,
  margin: 10,
  nav: true,
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
})