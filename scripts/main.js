$(document).ready(function () {

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

    $(".header a").on('mouseover', function() {
      $(this).css('background-color', '#C5BFB2');
    });

    $(".header a").on('mouseout', function() {
      $(this).css('background-color', '#3B3F3F');
    });

    function horseHover() {
      $(".horseLink").on('mouseover', function() {
        $(this).addClass('hoverEffect');
      });

      $(".horseLink").on('mouseout', function() {
        $(this).removeClass('hoverEffect');
      });
    };

    horseHover();

});
