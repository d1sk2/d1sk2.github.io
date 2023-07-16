$(function () {

    $("#rateYo").rateYo({
        rating: 4.5,
        halfStar: true
    });

    $("img.img-svg").each(function () {
        var $img = $(this);
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        $.get(imgURL, function (data) {
            var $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
                $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
            }
            $img.replaceWith($svg);
        }, "xml");
    });

    var mixer = mixitup('.blog__list');



    $('.blog__filter-btn').on('click', function () {
        $('.blog__filter-btn').removeClass('blog__filter-btn--active')
        $(this).addClass('blog__filter-btn--active')

    })

    $('.review__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinity: true,
        draggable: false,
        appendDots: $('.review__slider-dots'),
        responsive:
        [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },
            },
        ]
    })

    $('.review__slider-arrow-prev').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickPrev')
    })
    $('.review__slider-arrow-next').on('click', function (e) {
        e.preventDefault()
        $('.review__slider').slick('slickNext')
    })

    $('.faq__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('faq__acc-link--active')
        $(this).children('.faq__acc-text').slideToggle()
    })


    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0)

    $('.burger, .overlay').on('click', function (e) {
        e.preventDefault()
        $('.burger').toggleClass('open')
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })

});

function init() {
    let map = new ymaps.Map('map', {
        center: [40.7131896075153, -74.00313081274413],
        zoom: 12
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);