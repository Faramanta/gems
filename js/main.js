$(document).ready(function() {
// slider
    $('.owl-carousel').owlCarousel({
        items: 1,
        slideBy : 1,
        loop: true,
        autoplay: true,
    });
    // slider-end

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


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true,
    //     vertical: true
    // });

  $('.js-open-sort').on('click', function (e) {
    e.preventDefault();
    // $('.catalog__sort').removeClass('active');
    $(this).closest('.catalog__sort').toggleClass('active');
  });

    $('.js-select').on('click', function (e) {
        e.preventDefault();
        var sortdVal = $(this).text();
        console.log(sortdVal);
        $('.catalog-sort__item').removeClass('selected');
        $(this).addClass('selected');
        $(this).closest('.catalog__sort').removeClass('active');
        $(this).closest('.catalog__sort').find('.selected-item').text(sortdVal);
    });

    $('.js-catalog-filter-open').on('click', function (e) {
        e.preventDefault();
       $(this).closest('.catalog-wrap').find('.catalog__filter').toggleClass('active');
       $(this).toggleClass('active');
    });



});

