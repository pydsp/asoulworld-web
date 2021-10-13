'use strict';

$(window).on('load', function () {
    $("section.intro-section").css("height", $(document.body).height())
    /*------------------
        Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
    /*------------------
        Isotope Filter
    --------------------*/
    let $container = $('.isotope_items');
    $container.isotope();

});


(function ($) {
    /*------------------
          HEADER
      --------------------*/
    let navMenu = $('.menu-list');
    navMenu.onePageNav();
    $(window).on('scroll resize', function (e) {
        if ($(this).scrollTop() > 70) {
            $('.header-section').addClass('sticky');
        } else {
            $('.header-section').removeClass('sticky');
        }
        e.preventDefault();
    });

    $('.menu-list li a').on('click', function (event) {
        if ($(window).width() < 768) {
            $('.menu-list').slideUp(400);
            $('.header-section').removeClass('bgc');
        }
    });
    /*------------------
        WOW JS
    --------------------*/
    new WOW().init();


})(jQuery);