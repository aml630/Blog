
$(document).ready(function (){



$(".header").click(function () {
$(this).toggleClass("sky")

})

$(".title").hover(function () {
  function () {
     Pixastic.process($(this).get(0), "glow", {amount:0.5, radius:1.0});
   },
   function () {
     Pixastic.revert($(this).get(0));
   }
 );






})
