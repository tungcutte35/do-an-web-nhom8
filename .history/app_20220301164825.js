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
    centerMode: true,
    centerPadding: "60px",
  });
});
$(".latest-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  dots: true,
});
