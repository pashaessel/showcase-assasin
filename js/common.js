document.addEventListener('DOMContentLoaded', function () {

	const swiperSlider = new Swiper('.showcase-swiper', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-nav__next',
			prevEl: '.showcase-nav__prev'
		}
	});

	document.querySelector('.showcase__video').playbackRate = 2;

});
