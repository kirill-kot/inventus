jQuery(document).ready(function ($) {
    var newsSlider = new Swiper('#newsSlider', {
        pagination: {
            el: '.newsPagination',
            type: 'fraction',
        },
        scrollbar: {
            el: '.newsScrollbar',
            hide: false,
            draggable: true
        },
        observer: true,
        mousewheel: true,
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 320px
            480: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            // when window width is <= 480px
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is <= 480px
            992: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            // when window width is <= 480px
            1140: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is <= 640px
            1920: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
        // simulateTouch: false,
    });

});