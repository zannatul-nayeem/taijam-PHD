$(document).ready(function () {




    //slick slider

    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    //team slider start

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    $('.slide-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-img'
    });
    $('.slide-img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide-text',
        preveArrow: '.left-arrow',
        nextArrow: '.right-arrow',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    asNavFor: '.slide-text',
                    preveArrow: '.left-arrow',
                    nextArrow: '.right-arrow',
                    dots: false,
                    centerMode: true,
                    centerPadding: '0px',
                    focusOnSelect: true,
                    arrows: false,
                    autoplay: true,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slide-text',
                    preveArrow: '.left-arrow',
                    nextArrow: '.right-arrow',
                    dots: false,
                    centerMode: true,
                    centerPadding: '0px',
                    focusOnSelect: true,
                    arrows: false,
                    autoplay: false,
                }
    },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.slide-text',
                    dots: false,
                    centerMode: true,
                    centerPadding: '0px',
                    focusOnSelect: true,
                    autoplay: true,
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });






    /* ---- stats.js config ---- */

    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
        stats.begin();
        stats.end();
        if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
            count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
        }
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);




    // animation scroll js

    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    //wow js link

    new WOW().init();


    //scrollspy link

    $('body').scrollspy({
        target: ".navbar"
    });
});
