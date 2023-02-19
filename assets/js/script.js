
jQuery(function(){
    const navbarTogglerOpen = $('.navbar-toggler-open');
    const navbarTogglerClose = $('.navbar-toggler-close');

    $(navbarTogglerOpen).on('click', () => {
        $('.navbar-main-collapse').addClass('show-navbar-collapse');
    });

    $(navbarTogglerClose).on('click', () => {
        $('.navbar-main-collapse').removeClass('show-navbar-collapse');
    });


    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });
    

    $('.concern-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});