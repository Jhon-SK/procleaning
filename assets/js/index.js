$('.m-text-slide').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: false,
            slidesToShow: 1,  
            centerPadding: '0px',
            }
        },
        {
          breakpoint: 420,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            centerMode: false,
            }
        }
    ]
});

$('.m-gallery-imgs').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint: 450,
          settings: {
            dots: false,
            slidesToShow: 1,  
            centerPadding: '0px',
            }
        },
        {
          breakpoint: 420,
          settings: {
            autoplay: true,
            dots: false,
            slidesToShow: 1,
            centerMode: false,
            }
        }
    ]
});