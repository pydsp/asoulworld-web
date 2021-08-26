'use strict';

$(window).on('load', function() { 
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

	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");
		let selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
	let web = "<div class=\"col-md-2 col-sm-3 col-xs-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n" +
		"                    <a href=\"\">\n" +
		"                        <div class=\"service-item\">\n" +
		"                            <div class=\"serv-icon\">\n" +
		"                                <img class=\"logo-size\"\n" +
		"                                     src=\"img/n1/\"\n" +
		"                                     alt=\"\"/>\n" +
		"                                <p class=\"mt10 name-text\">\n" +
		"                                    test</p>\n" +
		"                            </div>\n" +
		"                            <div class=\"serv-content\">\n" +
		"                                <p class='desc-content'>test</p>\n" +
		"                            </div>\n" +
		"                        </div>\n" +
		"                    </a>\n" +
		"                </div>";
	let recorder="<div class=\"col-md-2 col-sm-3 col-xs-6 wow fadeInUp\" data-wow-delay=\"0.2s\">\n" +
		"                    <a href=\"https://space.bilibili.com/2075842775\">\n" +
		"                        <div class=\"service-item\">\n" +
		"                            <div class=\"serv-icon\">\n" +
		"                                <img class=\"logo-size\" src=\"img/n2/a.jpg\" alt=\"\"/>\n" +
		"                                <img class=\"type-logo\" src=\"\" alt=\"\"/>\n" +
		"                                <p class=\"mt10 name-text\"></p>\n" +
		"                            </div>\n" +
		"                            <div class=\"serv-content\">\n" +
		"                                <p class='desc-content'></p>\n" +
		"                            </div>\n" +
		"                        </div>\n" +
		"                    </a>\n" +
		"                </div>"
	$.getJSON("data/website.json",function (data) {
		$.each(data,function (index, json) {
			console.log(index)
			const a = $(web);
			a.find("a").attr("href",json["link"])
			a.find("img.logo-size").attr("src","img/n1/"+json["icon"])
			a.find("p.mt10").text(json["name"])
			a.find("p.desc-content").text(json["desc"])
			a.attr("data-wow-delay",index/10+"s")
			console.log(a.html())
			$("div#nav1").append(a)
		})
	})
	$.getJSON("data/recorder.json",function (data) {
		$.each(data,function (index, json) {
			const a = $(recorder);
			a.find("a").attr("href",json["link"])
			a.find("img.logo-size").attr("src","img/n2/"+json["icon"])
			a.find("p.mt10").text(json["name"])
			a.find("p.desc-content").text(json["desc"])
			a.attr("data-wow-delay",index/10+"s")
			switch (json["type"])
			{
				case 1:
					a.find("img.type-logo").attr("src","img/bilibili.ico")
					break;
				case 2:
					a.find("img.type-logo").attr("src","img/wyy.ico")
					break;
				default:
			}
			$("div#nav2").append(a)
		})
	})
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
		TYPED JS
	--------------------*/
	$(".element").typed({
		strings: ["<a class='ava-color' href='https://space.bilibili.com/672346917/'>AvA</a>",
			"<a class='bella-color' href='https://space.bilibili.com/672353429/'>Bella</a>",
			"<a class='carol-color' href='https://space.bilibili.com/351609538/'>Carol</a>",
			"<a class='diana-color' href='https://space.bilibili.com/672328094/'>Diana</a>",
			"<a class='eileen-color' href='https://space.bilibili.com/672342685/'>Eileen</a>",],
		typeSpeed: 50,
		loop:true,
		backDelay: 2000,
		backSpeed: 50,
	});



	/*------------------
		FOOTER
	--------------------*/
	/*取消自动计算main的下边界宽度
	var fh = $('.footer-section').height();
		fh = fh + 140;
	$('.main-warp').css('margin-bottom', fh);
	*/

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
		OWL CAROUSEL
	--------------------*/
	$('#review-carousel').owlCarousel({
		dots: false,
		nav: true,
		loop: true,
		margin:30,
		smartSpeed: 700,
		items:1,
		autoplay:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
	});



	/*------------------
		MAGNIDIC POPUP
	--------------------*/
	$('.work-item').magnificPopup({
		type: 'image',
		gallery: { enabled: true },
		removalDelay: 400,
		zoom:{enabled: true, duration: 300}
	});


	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();


	/*------------------
		CONTACT FORM
	--------------------*/
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Wait...');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text === "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Massage');
					}, 2500);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Massage');
					}, 5000);
				}
			}
		});
		return false;
	});


})(jQuery);