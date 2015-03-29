$(document).ready(function () {

    $(".navigation a").on('mouseover', function() {
      $(this).css('background-color', '#C0BCCB');
    });

    $(".navigation a").on('mouseout', function() {
      $(this).css('background-color', '#9586A9');
    });

    $('[data-toggle="popover"]').popover({
      trigger: 'hover',
      placement: 'top',
      html:true
    });

    $('.myMenuNew > li').bind('mouseover', openSubMenu);
		$('.myMenuNew > li').bind('mouseout', closeSubMenu);

		function openSubMenu() {
			$(this).find('ul').css('visibility', 'visible');
		};

		function closeSubMenu() {
			$(this).find('ul').css('visibility', 'hidden');
		};

});
