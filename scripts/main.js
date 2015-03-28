$( document ).ready(function() {

    $(".navigation a").on('mouseover', function() {
      $(this).css('background-color', '#C0BCCB');
    });

    $(".navigation a").on('mouseout', function() {
      $(this).css('background-color', '#9586A9');
    });

});
