$(document).ready(function () {
  $(".number-heading").counterUp({
    delay: 10,
    time: 1200,
  });
});
$(document).ready(function () {
  $(".latest-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: true,
    fade: true,
  });
});
$(".latest-slider").slick({
  slidesToShow: 3,
  // dots: true,
  centerMode: true,
  centerPadding: "60px",
});
$(".about-meet-boxbig").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
