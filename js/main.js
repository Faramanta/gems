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

  $('.js-open-pt').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.filter__drop').toggleClass('active');
  });

  $('.js-submenu-open').on('click', function (e) {
    e.preventDefault();
    $('.header-bot__nav-link-open').removeClass('active');
    $(this).closest('.header-bot__nav-link-open').toggleClass('active');
  });

    $(document).mouseup(function(event) {
        if ($(event.target).closest('.header-bot__nav-link-list').length ) return;
        $('.header-bot__nav-link-open').removeClass('active');
    });

});

