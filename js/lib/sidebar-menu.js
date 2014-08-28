//faq list
$(document).ready(function(){
	$(".sidebar__item").click(function () {
		$(this).toggleClass("sidebar__active");
		$(this).find('.sidebar__submenu').slideToggle('200');
	});
});
//---