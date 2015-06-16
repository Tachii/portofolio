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
				if (!$(this).hasClass(category)) {
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;
	});

	//Imnage Overlay onMouseOver

	$('ul#gallery li').on('mouseenter', function() {
		//Get data attribute values
		var title = $(this).data('title');
		var desc = $(this).data('desc');

		//Validation
		if (desc == null) {
			desc = "Click To Enlarge";
		}

		if (title == null) {
			title = '';
		}

		//Crelay Overlay Div
		$(this).append('<div class="overlay"></div>');

		//Get Overlay Div
		var overlay = $(this).children('.overlay');

		//Add Html to overlay
		overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

		overlay.fadeIn('slow');

	});

	$('ul#gallery li').on('mouseleave', function() {
		var overlay = $(this).children('.overlay');
		overlay.fadeOut('slow');
	});

});
