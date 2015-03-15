var $btnNav = $('.btn-nav');
var $nav = $('.navigation');

var $thumbnails = $('.zodiac');
var $lbImg = $('.lightbox-image');
var $lb = $('.lightbox');

$btnNav.on('click', function() {
	$nav.toggleClass('js-nav-open');
});

$thumbnails.on('click', 'a', function(e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
})