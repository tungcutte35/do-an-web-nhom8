$(document).ready(function () {
  $(".number-heading").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(".latest-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});
