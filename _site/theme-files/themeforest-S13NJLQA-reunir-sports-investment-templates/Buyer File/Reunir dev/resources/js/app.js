window.jQuery = window.$ = require('jquery');

require('popper.js');
require('bootstrap');
require('./slick.js');
require('./magnific-popup.min.js');
require('./jparticles.all.js');
require('./jquery.ripples-min.js');
require('./animated-headline.js');

(function ($) {
    "use strict";
    $(document).ready(function () {
        /*------------------------------
        smooth-scrolling
        -------------------------------*/

        $('#primary-menu li a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on('click', function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        /*------------------------------
            fixed-nav
        -------------------------------*/

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $("#navbar").removeClass("sticky");
            } else {
                $("#navbar").addClass("sticky");
            }
        });

        /*------------------------------
            calculate
        -------------------------------*/

        $(document).on('change', '.calculator-profit', function (e) {
            calculateProfit();
        })

        $(document).on('keyup', '.calculator-invest', function (e) {
            calculateProfit();
        })

        $(document).on('change', '.calculator-invest', function (e) {
            calculateProfit();
        })

        $('.counter').each(function () {

            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });

        });

        function calculateProfit() {
            var invest = $('.calculator-invest').val();
            var profit = $('.calculator-profit').val();
            if (! isNaN(invest) && ! isNaN(profit)) {
                var calculated = invest*(profit/100);
                $('.calculator-result-daily').text(calculated);
                $('.calculator-result-weekly').text(calculated*7);
                $('.calculator-result-monthly').text(calculated*30);
            }
        }

        /*------------------------------
            popup-videos
        -------------------------------*/

        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*------------------------------
            choose-section-carousel
        -------------------------------*/

        $('.choose-section-carousel').slick({

            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-left\"  aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-right\"  aria-hidden='true'></i></button>",
            dots: true,
            dotsClass: 'choose-section-dots',
            customPaging: function (slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }
            ]
        });

        /*------------------------------
            investment-section-carousel
        -------------------------------*/

        $('.investment-section-carousel').slick({

            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-left\"  aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-right\"  aria-hidden='true'></i></button>",
            dots: true,
            dotsClass: 'investment-section-dots',
            customPaging: function (slider, i) {
                var slideNumber = (i + 1),
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots:false
                    }
                }
            ]
        });

        /*------------------------------
            calculate-area
        -------------------------------*/

        $(document).on('change', '.calculator-area-profit', function (e) {
            calculateAreaProfit();
        })

        $(document).on('keyup', '.calculator-area-invest', function (e) {
            calculateAreaProfit();
        })

        $(document).on('change', '.calculator-area-invest', function (e) {
            calculateAreaProfit();
        })

        $('.counter').each(function () {

            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });

        });

        function calculateAreaProfit() {
            var invest = $('.calculator-area-invest').val();
            var profit = $('.calculator-area-profit').val();
            if (! isNaN(invest) && ! isNaN(profit)) {
                var calculated = invest*(profit/100);
                $('.calculator-result-area-daily').text(calculated);
                $('.calculator-result-area-weekly').text(calculated*7);
                $('.calculator-result-area-monthly').text(calculated*30);
            }
        }

        /*------------------------------
            testimonial-carousel
        -------------------------------*/

        $('.testimonial-carousel').slick({

            infinite: true,
            autoplay: true,
            centerMode:true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-double-left\"  aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-double-right\"  aria-hidden='true'></i></button>",
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        /*------------------------------
            home-section-slider
        -------------------------------*/

        $('.home-slider').slick({

            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-left\"  aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-right\"  aria-hidden='true'></i></button>",
        });

        /*------------------------------
            preloader
        -------------------------------*/

        $("#preloader").delay(300).animate({
            "opacity" : "0"
        }, 500, function() {
            $("#preloader").css("display","none");
        });


        /*------------------------------
            JParticles
        -------------------------------*/

        function bind(id, run) {
            var effect = run();

        }

        bind('#particles', function () {
            return new JParticles.particle('#particles .particles', {
                num: 100
            });
        });

        /*------------------------------
            ripple
        -------------------------------*/

        $('.ripple-container').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04
        });
    })

})(jQuery);