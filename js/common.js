$(function(){
	$('#page_top').click(function(){
		$('body, html').animate({
		scrollTop: 0
		}, 500);
	});
	
	$('.page_link a[href*="#"]').click(function(){
		var elmHash = $(this).attr('href');
		var pos = $(elmHash).offset().top();
		$('body, html').animate({scrollTop: pos}, 500);
		return false;
	});
	
	$(".openbtn").click(function () {
	    $(this).toggleClass('active');
	    $("nav.main_menu ul li").slideToggle();
	});
	
	
	function Bg_Anime(){
		var len = 30;
		var windowHeight = $('#footer').offset().top;
		var windowWidth = $(window).width() - 70;
		for (let i = 0; i < len; i++) {
			var rand = Math.floor(Math.random() * windowHeight);
			var rand2 = Math.floor(Math.random() * windowWidth);
			var atai = '<img src="./img/icon_haguruma.png" class="atai' + i + '">';
			var ataiC = '.atai' + i;
			$('.bg_icon').append(atai);
			$(ataiC).css('top', rand);
			$(ataiC).css('left', rand2);
			
		}
	}
	
	function PageTopAnime(){
		var scroll = $(window).scrollTop();
		if (scroll >= 300) {
			$('#page_top').removeClass('DownMove');
			$('#page_top').addClass('UpMove');
		} else {
			if ($('#page_top').hasClass('UpMove')) {
				$('#page_top').removeClass('UpMove');
				$('#page_top').addClass('DownMove');
			}
		}
		var wH = window.innerHeight;
		var footerPos = $('#footer').offset().top;

		if(scroll+wH >= (footerPos)) {
			var pos = (scroll + wH) - footerPos + 100
			$('#page_top').css('bottom', pos);
		} else {
			if($('#page_top').hasClass('UpMove')) {
				$('#page_top').css('bottom', '110px');
			}
		}
		
		
	}
	
	function fadeAnime(){
		const sec = ['#section2','#section3', '#section4', '#section5'];
		
		for(let i = 0; i < sec.length; i++){
			$(sec[i]).each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if(scroll >=  elemPos - windowHeight) {
					$(this).addClass('fadeUp');
				} else {
					$(this).removeClass('fadeUp');
				}
			});
		}
	}
	
	function scrollTimeAnime() {
		$('.timeline li').each(function(){
			var elemPos = $(this).offset().top-300;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var startPoint = 10;
			if(scroll>= elemPos - windowHeight - startPoint){
				var H = $(this).outerHeight(true)
				var percent = (scroll + startPoint - elemPos) / (H/2) * 100;
				
				if(percent > 100){
					percent = 100;
				}
				$(this).children('.border_line').css({
					height: percent + "%",
				});
			}
		});
	}
	
	$(window).scroll(function(){
		PageTopAnime();
		fadeAnime();
		scrollTimeAnime();
	});
	
	$(document).ready( function(){
		Bg_Anime();
	});
 
});

