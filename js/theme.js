/*
Theme Name: Yoox
Theme URI: http://layerdrops.com/
Author: Layerdrops
Author URI: http://layerdrops.com/
Description: Yoox - Fine One Page Parallax HTML5 Responsive Template
Version: 1.0
License:
License URI:
*/

/*=======================================================================
[Table of contents]
=========================================================================

1. Revolution Slider 01
2. Revolution Slider 02
3. Revolution Slider 03
4. Revolution Slider 04
5. Testimonial Carousel
6. Fun Fact Count
7. Team Member Skills
8. Clinet Slider
9. Google Map
10. Parallax BG
11. Video PopUp
12. Menu PopUp 
13. Search PopUp 
14. Mobile Menu
15. Bact To Top Button
16. Header Fixed
17. Active Menu Scroll 
18. Right Side Fixed Menu
19. Menu Scroll Function
20. Portfolio Popup
21.Color Preset
22. Preloder
23. Contact From Submit

*/

(function ($) {
    'use strict';

    /*--------------------------------------------------------
    / 1. Revolution Slider 01
    ----------------------------------------------------------*/
    
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "left",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42
            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_1 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 2. Revolution Slider 02
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "right",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_2 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 3. Revolution Slider 03
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_3').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "right",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_3 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 4. Revolution Slider 04
     ----------------------------------------------------------*/

    var revapi = jQuery('#rev_slider_4').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 300],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: false
            },
            bullets: {
                enable: false,
                style: "custom",
                direction: 'horizontal',
                container: 'layergrid',
                hide_onleave: false,
                h_align: "left",
                v_align: "bottom",
                h_offset: 0,
                v_offset: -134,
                space: 42

            }
        }
    });
    revapi.one('revolution.slide.onloaded', function () {

        $('#rev_slider_4 .tp-bullets .tp-bullet').each(function (index) {
            index = index + 1;
            $(this).html((index < 10) ? '0' + index : index);
        });
    });

    /*--------------------------------------------------------
    / 5. Testimonial Carousel
     ----------------------------------------------------------*/

    $('.testimonial_carousel').owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        items: 1,
        dots: false,
        nav: false
    });

    /*--------------------------------------------------------
    / 8. Clinet Slider
    /----------------------------------------------------------*/

    $('.client_slider').owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoplay: true
            },
            500: {
                items: 2
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



    /*--------------------------------------------------------
    / 10. Parallax BG
    /----------------------------------------------------------*/
    $(document).ready(function () {
        var per1 = $('.perelaxBg1'),
                per2 = $('.perelaxBg2'),
                per3 = $('.perelaxBg3');
        if (per1.length > 0) {
            per1.parallax("0", 0.2);
        }
        if (per2.length > 0) {
            per2.parallax("0", 0.2);
        }
        if (per3.length > 0) {
            per3.parallax("0", 0.2);
        }
    });

    /*--------------------------------------------------------
    / 11. Video PopUp
    /----------------------------------------------------------*/
    $('.video_link').magnificPopup({
        type: 'iframe'
    });



    /*--------------------------------------------------------
    / 15. Bact To Top Button
    /----------------------------------------------------------*/

    var back = $("#backToTop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        var h = $(window).height() / 2;
        if ($(window).scrollTop() > h)
        {
            back.addClass('showit');
        } else
        {
            back.removeClass('showit');
        }

    });
    body.on("click", "#backToTop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
    });



    /*--------------------------------------------------------
    / 17. Active Menu Scroll 
    /----------------------------------------------------------*/
    $('.mainMenu ul li.scroll > a').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo');
        return false;
    });
    $('.dl-menu__wrap ul li.scroll > a').on('click', function () {

        if (!$(this).parent().hasClass('menu-item-has-children'))
        {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo', function () {
                $("body").removeClass("menu__open show-overlay-nav");
            });
            return false;
        } else {
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000, 'easeInExpo');
        }
    });
    

    /*--------------------------------------------------------
    / 19. Menu Scroll Function
    /----------------------------------------------------------*/
    function scroll_topmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.mainMenu li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    function scroll_popupmenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.dl-menu__wrap').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.dl-menu__wrap li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    function scroll_sidemenu() {

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.fixednavHeader').find('.scroll > a').each(function () {
            var atr = $(this).attr('href');
            if ($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.fixednavHeader li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }


    /*--------------------------------------------------------
    / 21. Color Preset
    /----------------------------------------------------------*/
    
    if($(".color_settings").length > 0)
    {
        var switchs = true;
        $(".switch-btn").on('click', function(e){
            e.preventDefault();
            if(switchs)
            {
                $(this).addClass('active');
                $(".color_settings").animate({'left' : '0px'}, 400);
                switchs = false;
            }else
            {
                $(this).removeClass('active');
                $(".color_settings").animate({'left' : '-240px'}, 400);
                switchs = true;
            }
        });
        $(".color_preset button").on('click', function(e){
            e.preventDefault();
            var color = $(this).attr('id');
            $(".color_preset button").removeClass('active');
            $(this).addClass('active');
            $("#colorChange").attr('href', 'css/presets/' + color + '.css');
        });
    }
    ;
    
    /*--------------------------------------------------------
    / 22. Preloder
    /----------------------------------------------------------*/
    
    $(window).load(function(){
        var preload = $('.preloader');
        if(preload.length > 0){
            preload.delay(800).fadeOut('slow');
        }
    });
   
    /*--------------------------------------------------------
    / 23. Contact From Submit
    /----------------------------------------------------------*/
    
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").html('Processsing...');
            var f_name = $("#f_name").val();
            var l_name = $("#l_name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var message = $("#con_message").val();

            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'ajax/mail.php',
                    data: {f_name: f_name, l_name: l_name, email: email, phone: phone, message: message},
                    success: function(data)
                    {
                        //alert(data);
                        $("#con_submit").html('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                        setTimeout(function() {
                            $("#con_submit").html('Send Message');
                        }, 2500);
                    }
                });
            }
            else
            {
                $("#con_submit").html('Failed!');
            }

        });

        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }

})(jQuery);