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

    $(function()  {
        $("#contact_form").submit(function()
        {
            var email = $("#email").val();
            var name = $("#name").val();
            var msg = $("#msg").val();
            $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': '6FOJNhZFpKFKScDI2wIbHQ',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': 'Message From Oak Hill Farm Website',
                        'text': msg,
                        'to': [
                        {
                            'email': 'lisaot61@gmail.com',
                            'name': 'Lisa Otten',
                            'type': 'to'
                        }]
                    }
                }
            })
            .done(function(response) {
                alert('Your message has been sent. Thank you!');
                $("#name").val('');
                $("#email").val('');
                $("#msg").val('');
            })
            .fail(function(response) {
                alert('Error sending message.');
            });
            return false;
        });
    });

});
