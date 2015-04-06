var $btnNav = $('.btn-nav');
var $nav = $('.navigation');

var $thumbs = $('.thumbnails');
var $lbImg = $('.lightbox-image');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$btnNav.on('click', function() {
	$nav.toggleClass('js-nav-open');
});

$thumbs.on('click', 'a', function(e) {
	e.preventDefault();
	var big = $(this).attr('href');
	$lbImg.attr('src', big);
	$lb.attr('data-state', 'visible');
});

$btnClose.on('click', function () {
	$lb.attr('data-state', 'hidden');
});


var $cityscape = $('.banner-bottom');

$cityscape.waypoint(function (direction) {
	if (direction == 'down') {
		$cityscape.addClass('js-active-city');
	}
	else {
		$cityscape.removeClass('js-active-city');
	}
}, { offset: '85%' } );