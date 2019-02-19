"use strict";

const $window = $(window);
const $scrollBar = $("#scroll-bar");
const $scrollLink = $("#scroll-link");
const $projects = $(".projects__container");

$scrollLink.on("click", scrollDown);
$window.on("scroll", scrollBarHighlight);

function scrollDown() {
  $("html,body").animate(
    {
      scrollTop: $projects.offset().top
    },
    800
  );
}

function scrollBarHighlight() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  $scrollBar.css("width", scrolled + "%");
}
