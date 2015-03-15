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
// 	e.preventDefault();
// 	var big = $(this).attr('.preview');
// 	$lbImg.attr('href', big);
// 	$lbx.attr('data-state', 'visible');
// });

// $btnClose.on('click', function() {
// 	$lightbox.attr('data-state', 'hidden');
});