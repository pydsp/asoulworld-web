'use strict';

$(window).on('load', function() {
	$("section.intro-section").css("height",$(document.body).height())
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



(function($){

	/*------------------
  		HEADER
  	--------------------*/
	var navMenu = $('.menu-list')
		navMenu.onePageNav();
	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > 70) {
			$('.header-section').addClass('sticky');
		}else{
			$('.header-section').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('.menu-list li a').on('click', function(event) {
		if ($(window).width() < 768) {
			$('.menu-list').slideUp(400);
			$('.header-section').removeClass('bgc');
		}
	});


	/*------------------
		PROGRESS BAR
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"><span>100%</span></div>');
		}
	});

	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();


})(jQuery);