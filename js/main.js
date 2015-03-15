var $btnNav = $('.btn-nav');
var $nav = $('.navigation');

var $thumbs = $('.zodiac');
var $lightboxImg = $('.lightbox-image');
var $lightbox = $('.lightbox');
var $btnClose = $('.btn-close');

$btnNav.on('click', function() {
	$nav.toggleClass('js-nav-open');
});

$thumbs.on('click', '.preview', function(e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lightboxImg.attr('a', big);
	$lightbox.attr('data-state', 'visible');
});

$btnClose.on('click', function() {
	$lightbox.attr('data-state', 'hidden');
});