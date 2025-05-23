(function($) {
    "use strict";
     $(document).on('ready', function() {	
	
			
		/*====================================
			Header Sticky JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 1) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		/*====================================
			Mobile Menu JS
		======================================*/ 
		$('.main-menu').slicknav({
			prependTo:".mobile-nav",
			label: '',
			duration: 500,
			easingOpen: "easeOutBounce",
		});
		
		/*====================================
			Search JS
		======================================*/ 	
		$('.top-search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Team JS
		======================================*/ 
		$('.single-team').on( "click", function(){
			$(this).toggleClass("active");
		});
		
		/*====================================
			Sidebar Popup JS
		======================================*/ 	
		$('.right-nav .bar').on( "click", function(){
			$('.sidebar-popup').addClass('active');
		});
		
		$('.sidebar-popup .cross').on( "click", function(){
			$('.sidebar-popup').removeClass('active');
		});
		
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		});
		
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		});
		
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});
		
		
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.team-slider').owlCarousel({
			items:3,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.blog-latest-slider').owlCarousel({
			items:2,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:2,
				},
			}
		});
		/*====================================
			Portfolio Details JS
		======================================*/ 
		$('.partner-slider').owlCarousel({
			items:6,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			margin: 30,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			dots:false,
			responsive:{
				300: {
					items:2,
					nav:false,
				},
				480: {
					items:3,
					nav:false,
				},
				768: {
					items:4,
					nav:false,
				},
				1170: {
					items:6,
				},
			}
		});
		
		
		
		
		
		
		
		/*=====================================
			CounterUp JS
		======================================*/  
		$('.number').counterUp({
			time: 1000
		});
		
		/*=====================================
			Video Popup
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
	});
	
		
		/*====================================
			Scrool Up JS
		======================================*/ 	
		$.scrollUp({
			scrollName: 'scrollUp',      // Element ID
			scrollDistance: 300,         // Distance from top/bottom before showing element (px)
			scrollFrom: 'top',           // 'top' or 'bottom'
			scrollSpeed: 1000,            // Speed back to top (ms)
			animationSpeed: 200,         // Animation speed (ms)
			scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
			scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
			scrollTitle: false,          // Set a custom <a> title if required.
			scrollImg: false,            // Set true to use image
			activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647           // Z-Index for the overlay
		});
		
		/*====================================
			Preloader JS
		======================================*/
		jQuery(window).load(function() {
			jQuery(".preeloader").fadeOut('slow', function(){
				jQuery(this).remove();
			});
		});
		
})(jQuery);



/*====================================
			Client Section
		======================================*/ 

		$(document).ready(function(){
			$(".carousel1").Carousel1({
				loop: true,
				margin: 30,
				nav: false,
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
				responsive: {
					0: { items: 1 },
					600: { items: 3 },
					1000: { items: 5 }
				}
			});
		});



		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 3, /* Show 3 logos at a time */
			spaceBetween: 30,
			loop: true,
			autoplay: {
				delay: 2000, /* Auto-slide every 2 seconds */
				disableOnInteraction: false,
			},
			// pagination: {
			// 	el: ".swiper-pagination",
			// 	clickable: true,
			// },
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				768: { slidesPerView: 4 }, /* 4 slides on tablets */
				1024: { slidesPerView: 5 }, /* 5 slides on large screens */
			}
		});


// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    menuIcon.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
});
		