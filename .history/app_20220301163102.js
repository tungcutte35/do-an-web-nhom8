$(document).ready(function () {
  $(".number-heading").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(document).ready(function () {
  $(".latest-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
  });
});
$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
