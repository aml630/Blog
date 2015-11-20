
$(document).ready(function (){




$("#me").hover(function () {
$(this).toggleClass("imagehover")

})



var counter = 0;

$("#plus").click(function(){
  counter++;
  $("#count").text(counter);
});

$("#minus").click(function(){
  counter--;
  $("#count").text(counter);
});


var score = 0;



$(".buttondown").click(function(){
  score--;
  $(".score").text(score);
    $(".score").css("margin-top", 5*score)
});
$(".buttonup").click(function(){
  score++;
  $(".score").text(score);
  $(".score").css("margin-top", 5*score)
});

var score2 = 0;



$(".buttondown").click(function(){
  score2--;
  $(".score2").text(score2);
    $(".score2").css("margin-top", 5*score)
});
$(".buttonup").click(function(){
  score2++;
  $(".score2").text(score);
  $(".score2").css("margin-top", 5*score)
});


/* Sticky Header Code */

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.header').addClass("sticky");
  }
  else{
    $('.header').removeClass("sticky");
  }
});


/* End Sticky Header Code */




});
