'use strict';

$(window).on('load', function() {
	//let h = $(document.body).height();
	//$("section.intro-section").css("height",h)

	//判定iOS
	// let UA=navigator.userAgent
	// if(UA.indexOf("iPhone")!==-1||UA.indexOf("iphone")!==-1)
	// {
	// 	$("div.intro-content").css("background-attachment","scroll")
	// }
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(200).fadeOut("slow");
});

(function($){
	/*------------------
  		HEADER
  	--------------------*/
	let navMenu = $('.menu-list')
		navMenu.onePageNav();
	$(window).on('scroll resize',function(e) {
		if ($(this).scrollTop() > 70) {
			$('.header-section').addClass('sticky');
		}else{
			$('.header-section').removeClass('sticky');
		}
		e.preventDefault();
	});

	$('.responsive').on('click', function(event) {
		$('.menu-list').slideToggle(400);
		$('.header-section').toggleClass('bgc');
		event.preventDefault();
	});

	$('.menu-list li a').on('click', function(event) {
		if ($(window).width() < 768) {
			$('.menu-list').slideUp(400);
			$('.header-section').removeClass('bgc');
		}
	});

	/*------------------
		WOW JS
	--------------------*/
	//new WOW().init();
})(jQuery);