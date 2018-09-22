$(function() {

	// resize logo on scroll >= 100
	var navbar = $(".navbar");
	var navbar_logo = $(".navbar-brand");
	var navbar_bg_old = navbar.css("background");
	var logo_width_old = navbar_logo.css("width");
	// var logo_background_old = navbar_logo.css("background-color")

	// update `.active` for current menu area
	var topMenu = $("#PrimaryMenu"),
		topMenuHeight = topMenu.outerHeight() + 15,
		menuItems = topMenu.find("li a"),

		scrollItems = menuItems.map(function() {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});

	$(window).on("scroll", function() {
		// resize logo on scroll >= 100
		if ($(this).scrollTop() >= 100) {
			navbar_logo.css({
				'width': '12rem'
			});
			navbar.css({
				'background': 'rgba(33, 33, 33, 1)'
			});
		} else {
			navbar_logo.css({
				'width': logo_width_old
			});
			navbar.css({
				'background': navbar_bg_old
			});

		}

		// update `.active` for current menu area
		var fromTop = $(this).scrollTop() + topMenuHeight;
		var cur = scrollItems.map(function() {
			if ($(this).offset().top < fromTop) {
				return this;
			}
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";
		menuItems
			.parent().removeClass("active")
			.end().filter("[href='#" + id + "']")
			.parent().addClass("active");
	});

	// Close navbar on click
	$('.nav-link').on('click', function() {
		$('.navbar-collapse').collapse('hide');
	});
});