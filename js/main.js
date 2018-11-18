// slider
$('.owl-carousel').owlCarousel({
    items: 1,
    slideBy : 1,
    loop: true,
    // autoplay: true,
});
// slider-end

$(document).ready(function() {

  $('.js-open-filter').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.header-bot__btn-block').toggleClass('active');
  });
});

