// Custom JavaScript

    /* =============================
       STICKY HEADER
    ============================= */
$(document).ready(function () {
    "use strict";

    /* =============================
       STICKY HEADER
    ============================= */
    function headerSticky() {
        var windowPos = $(window).scrollTop();
        if (windowPos > 20) {
            $('.fixed-top').addClass("on-scroll");
            $('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
            $('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
        } else {
            $('.fixed-top').removeClass("on-scroll");
            $('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
            $('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
        }
    }
    headerSticky();
    $(window).on('scroll', headerSticky);

    /* =============================
       SCROLLSPY
    ============================= */
    if ($.fn.scrollspy) {
        $('body').scrollspy({
            offset: 170,
            target: '.dtr-scrollspy'
        });
    }

    /* =============================
       SMOOTH SCROLL FUNCTION
    ============================= */
    function smoothScroll(targetSelector) {
        var navOffset = $('#dtr-header-global').outerHeight() || 0;
        if ($(targetSelector).length) {
            $('html, body').animate({
                scrollTop: $(targetSelector).offset().top - navOffset - 37
            }, 700, "swing"); // change "swing" to "easeInSine" if you include jQuery Easing
        }
    }

    /* =============================
       NAV CLICK HANDLER
    ============================= */
    function attachNavClicks(selector) {
        $(selector).on("click", function(e){
            var target = $(this).attr('href');
            if (target.startsWith("#") && $(target).length) {
                e.preventDefault();
                smoothScroll(target);
                // Close mobile menu if open
                if ($('.slicknav_nav').is(':visible')) {
                    $("#dtr-menu-button").removeClass("is-active");
                    $('.slicknav_nav').slideUp();
                }
            }
        });
    }

    // Attach smooth scroll to desktop menu and scroll links
    attachNavClicks('.dtr-nav a[href^="#"], .dtr-scroll-link');

    /* =============================
       RESPONSIVE MENU (SLICKNAV)
    ============================= */
    if ($.fn.slicknav) {
        $('.main-navigation .dtr-nav').slicknav({
            label: "",
            prependTo: '.dtr-responsive-header-menu',
            allowParentLinks: true,
            menuButton: '#dtr-menu-button',
            closeOnClick: true
        });

        // Attach smooth scroll to cloned mobile menu links
        attachNavClicks('.slicknav_nav a[href^="#"]');
    }
});

    /* =============================
       SECTION ANCHOR
    ============================= */
    function sectionAnchor() {
        var navoffset = $('#dtr-header-global').height();
        var hash = window.location.hash;
        if (hash !== '') {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - navoffset - 37
                }, 800, 'swing');
                history.pushState('', document.title, window.location.pathname);
            }, 500);
        }
    }
    sectionAnchor();

    /* =============================
       RESPONSIVE ANCHOR
    ============================= */
    if ($(window).width() < 992) {
        var mnavoffset2 = $('.dtr-responsive-header').height();
        var hash2 = window.location.hash;
        if (hash2 !== '') {
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $(hash2).offset().top - mnavoffset2 - 15
                }, 800, 'swing');
                history.pushState('', document.title, window.location.pathname);
            }, 500);
        }
    }

 	// sticky tabs
	if ($(".dtr-sticky-tabs-wrapper").length > 0) {
		var tabs_container = $(".dtr-sticky-tabs-wrapper");
		var tabs_nav = $(".dtr-sticky-tabs-nav");
		var offset = tabs_container.offset().top;
		$(window).scroll(function(event) {
			var scroll = $(window).scrollTop();
			var total = tabs_container.height() + offset - 200;
			if (scroll > total) {
				tabs_nav.addClass('dtr-sticky-tabs-hide')
			}
			if (scroll < total) {
				tabs_nav.removeClass('dtr-sticky-tabs-hide')
			}
		});
	}

	// sticky tabs scroll 
	var taboffset = $('#dtr-header-global').height();
	var taboffset2 = $('.dtr-sticky-tabs-nav').height();
	
$('.dtr-sticky-tabs-nav a.nav-link').on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    var target = $(this).attr('href');

    if ($(target).length) {
        var headerOffset = $('#dtr-header-global').outerHeight() || 0;
        var tabsOffset = $('.dtr-sticky-tabs-nav').outerHeight() || 0;

        $('html, body').animate({
            scrollTop: $(target).offset().top - headerOffset - tabsOffset - 20
        }, 600);
    }
});


  
    /* =============================
       WOW / PARALLAX
    ============================= */
    if ($(window).outerWidth() >= 767) {
        if (typeof WOW === "function") {
            new WOW({ mobile: false }).init();
        }
        if ($.fn.parallaxie) {
            $(".parallax").parallaxie({ speed: 0.6 });
            $(".parallax.parallax-slow").parallaxie({ speed: 0.3 });
        }
    }


    /* =============================
       COUNTER
    ============================= */
    if ($.fn.appear && $.fn.countTo) {
        $(".dtr-counter").appear(function () {
            $(".counting-number").countTo();
        });
    }

    /* =============================
       CONTACT FORM
    ============================= */
    if ($.fn.validate && $.fn.ajaxSubmit) {
        $("#contactform").validate({
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    target: "#result",
                    clearForm: true
                });
            }
        });
        $('#contactform #message').val('');
    }


/* =============================
   WINDOW LOAD
============================= */
$(window).on('load', function () {
    $('.dtr-preloader').delay(400).fadeOut(500);
});

