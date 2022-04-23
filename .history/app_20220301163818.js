$(document).ready(function () {
  $(".number-heading").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(document).ready(function () {
  $(".latest-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  });
});
$(".latest-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
});
