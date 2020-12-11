$('.slider__items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: '.prev-slide',
    nextArrow: '.next-slide',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1186,
        settings: {
          slidesToShow: 2,
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