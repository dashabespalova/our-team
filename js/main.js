;(function($){
	$(function(){
		var slider = $('.ba-slider');
		slider.slick({
			dots:true,
			gorizontal:true,
			infinity: false
		});
		slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log(nextSlide);
			var currentSlideEl = $(slick.$slides[currentSlide]),
			nextSlideEl = $(slick.$slides[nextSlide]),
			currentClass = currentSlideEl.data('team'),
			nextClass = nextSlideEl.data('team');
			$('body').removeClass(currentClass).addClass(nextClass);
		});
	});

})(jQuery);
