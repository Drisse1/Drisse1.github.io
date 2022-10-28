$(function () {

    // trigger nice scroll plugin
    // $('body').niceScroll({
    //     cursorcolor: '#f7600e',
    //     cursorborder: '0',
    //     cursorborderradius: '10px 0 0 10px'

    // });

    // change header height
    var header = $('.header'),
    win = $(window),
    intro = $('.intro'),
    navbar = $('.navbar'),
    mxHeight1 = ($(window).height() - intro.height()) / 2;

    header.height(win.height());

    $(window).resize(function () {

        header.height(win.height());

        $(intro).css('paddingTop', mxHeight1);
    });
    //adjust bbx slider list item center
    intro.each(function () {
        $(this).css('paddingTop', mxHeight1);
    });

    //  scroll to features
    $('.header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });

    // scroll to our team
    $('.hire').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-team').offset().top
        }, 1000);
    });

    // scroll to our work
    $('.show-work').click(function () {
        $('html, body').animate({
            scrollTop: $('.our-work').offset().top
        }, 1000);
    });

    // show hidden items from work
    $('.show-more').click(function () {
        $('.our-work .hidden').fadeIn(1000);
        $('body').niceScroll({iframeautoresize: true});
    });

    // check testimonials
    var leftArrow = $('.testimonials .fa-chevron-left'),
        rightArrow = $('.testimonials .fa-chevron-right');

    function checkClient() {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();

    };
    checkClient();

    $('.testimonials i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
        if ($(this).hasClass('fa-chevron-left')) {
            $('.testimonials .active').fadeOut(100, function () {
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClient();
            });
        }
    });

    // back to top Button
    var $backToTop = $(".back-top");
    $backToTop.hide();
    $(window).on('scroll', function() {
        $(this).scrollTop() > $(window).height() ? $backToTop.fadeIn() : $backToTop.fadeOut();
        // if ($(this).scrollTop() >= $(window).height()) {
        //   $backToTop.fadeIn();
        // } else {
        //   $backToTop.fadeOut();
        // }
      });

      $backToTop.on('click', function(e) {
        $("html, body").animate({scrollTop: 0}, 1000);
      });

    // trigger nice scroll plugin
    $('body').niceScroll({
        cursorcolor: '#f7600e',
        cursorborder: '0',
        cursorwidth: '5px',
        cursorborderradius: '0',
    });
});