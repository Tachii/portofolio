$(document).ready(function() {
	$('nav a').on('click', function() {
		$('.current').removeClass('current');
		$(this).parent().addClass('current');
	});
});
