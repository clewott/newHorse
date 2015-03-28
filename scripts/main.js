$( document ).ready(function() {

    $(".navigation a").on('mouseover', function() {
      $(this).css('background-color', 'blue');
    });

    $(".navigation a").on('mouseout', function() {
      $(this).css('background-color', 'red');
    });

});
