var $btnNav = $('btn-nav');
var $list = $('.list');

$btnNav.on('click', function() {
	var $li = $('<li>Constellations</li>');
	$list.append($li);
	$li.addClass('js-btn-nav');
})