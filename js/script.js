$(document).ready(function() {
	$('nav a').on('click', function() {
		//Current NavBar Item Highlight
		$('.current').removeClass('current');
		$(this).parent().addClass('current');

		//Set Heading text
		$('h1#heading').text($(this).text());

		//Get & Filter Link Text
		var category = $(this).text().toLowerCase().replace(' ', '-');

		//Remove Hidden Class if 'all-projects' is selected
		if (category == 'all-projects') {
			$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#gallery li').each(function() {
				if (!$(this).hasClass('category')) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}

	});
});
