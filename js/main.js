(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });
})(jQuery);

$('.works__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: ".slider__prev",
    nextArrow: ".slider__next",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]

});

$('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 810,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

var marker = "";
var map = "";
function initMap() {
    var uluru = {lat: 48.922032, lng: 24.7077473};
    map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    marker = new google.maps.Marker({position: uluru, map: map});
}
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
