var $btnNav = $('btn-nav');
var $nav = $('.navigation');

$btnNav.on('click', function() {
	$nav.toggleClass('js-nav-open')
});