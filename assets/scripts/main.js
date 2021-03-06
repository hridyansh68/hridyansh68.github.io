
/***********************************************************************************
Parallax Scrolling
************************************************************************************/

$(document).ready(function(){
    $(window).bind('scroll', function(){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolledY = $(window).scrollTop();

        $('.pullup').css('margin-top','-' + ((scrolledY*0.15)) + 'px');
        $('.pulldown').css('margin-top','+' + ((scrolledY*0.15)) + 'px');
        $('.pullleft').css('left','+' + ((scrolledY*0.05)) + '%');
        $('.pullrights').css('width','+' + ((scrolledY*0.035)) + 'px');
    }

    $(window).scroll(function(){
        $('.fadeout').css('opacity', 1 - $(window).scrollTop() / 750);
    });
});

/***********************************************************************************
Smooth Scrolling
************************************************************************************/

$(document).on('click', '.scroll', function() {
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 60
    });

    return false;
});

/***********************************************************************************
In View Detection
************************************************************************************/

$(document).ready(function() {
    var $animation_elements = $('.animated');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});

/***********************************************************************************
Panel Toggles
************************************************************************************/

$(document).ready(function() {
    $(document).on('click', '.open', function() {
        var myelement = $(this).attr('href');

        $('.opened').not(myelement).addClass('fade-out');

        $(myelement).removeClass('fade-out closed').addClass('opened animated fast fade-in');

        setTimeout(function(){
            $('.opened').not(myelement).removeClass('opened').addClass('closed');
        }, 500);
        
        return false;
    });
    
    $(document).on('click', '.close', function() {
        var myelement = $(this).attr('href');
        
        $(myelement).removeClass('fade-in opened').addClass('animated fast fade-out');

        setTimeout(function(){  
            $(myelement).addClass('closed');
        }, 500);
        
        return false;
    });
});

/***********************************************************************************
Mailchimp Form Processing
************************************************************************************/
