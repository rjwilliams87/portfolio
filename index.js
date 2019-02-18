"use strict";

const $scrollLink = $("#scroll-link");
const $projects = $(".projects__container");

$scrollLink.on("click", scrollDown);

function scrollDown() {
  $("html,body").animate(
    {
      scrollTop: $projects.offset().top
    },
    800
  );
}
