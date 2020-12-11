$('.routes__slider-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: '.routes__prev-arrow',
    nextArrow: '.routes__next-arrow',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1148,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });