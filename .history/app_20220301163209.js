$(document).ready(function () {
  $(".number-heading").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(document).ready(function () {
  $(".latest-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".latest-slider",
  });
});
$(".latest-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".latest-slider",
  dots: true,
  centerMode: true,
  focusOnSelect: true,
});
