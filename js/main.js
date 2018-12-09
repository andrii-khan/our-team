;(function($) {
	"use strict";
	
    const slider = $('.ba-team-slider');
    const prev = $('.prev');
    const next = $('.next');
    slider.slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: prev,
        nextArrow: next
    });	
})(jQuery);