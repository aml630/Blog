
$(document).ready(function (){




$(".go").click(function () {





var language = $("#languages").val();

if (language == "None") {
//  $(".allBootcamps div").hide();
}


else if (language == "Ruby") {
  $(".bootcamps div").hide();
  $("#ADA").show();
  $("#anyoneCanLearn").show();
  $("#appAcademy").show();
  $("#anyoneCanLearn").show();
  $("#apprentice").show();
}
else if (language == "Javascript") {
  $(".bootcamps div").hide();
  $(".allBootcamps div").show();

}
else if (language == "Angular") {
  $(".allBootcamps div").hide();
  $("#anyoneCanLearn").show();

}
});




$(".showAll").click(function () {
$(".allBootcamps div").show();

})













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


$('#map').usmap({
  // The click action
  click: function(event, data) {
    $('#clicked-state')
      .text('You clicked: '+data.name)
      .parent().effect('highlight', {color: '#C7F464'}, 2000);
  }
});

$('#map').click(function() {

  var state = $("#clicked-state").text();

  if (state == "You clicked: OR") {
    $(".allBootcamps div").hide();
    $("#epicodus").show();
    $("#apprentice").show();
    $("#portlandCodeGuild").show();
    $("#theTechAcademy").show();



  }

  if (state == "You clicked: WA") {
    $(".allBootcamps div").hide();
    $("#ADA").show();
    $("#coderCamps").show();
    $("#codingDojo").show();
    $("#codingHouse").show();
    $("#fireBootCamp").show();
    $("#galvonize").show();
    $("#generalAssembly").show();



  }
  if (state == "You clicked: CA") {
    $(".allBootcamps div").hide();
    $("#angelHack").show();
    $("#anyoneCanLearn").show();
    $("#appAcademy").show();
    $("#apprentice").show();
    $("#bigNerdRanch").show();
    $("#coderCamps").show();
    $("#codingDojo").show();
    $("#devBootcamp").show();
    $("#geekwiseAcademy").show();
    $("#galvonize").show();
    $("#generalAssembly").show();
    $("#hackReactor").show();
    $("#hackbrightAcademy").show();
    $("#learnTechLabs").show();
    $("#learningFuze").show();
    $("#makeSchool").show();
    $("#makerSquare").show();
    $("#mobileMakersAcademy").show();
    $("#rocketU").show();
    $("#sabio").show();





  }
  if (state == "You clicked: IL") {
    $(".allBootcamps div").hide();
    $("#anyoneCanLearn").show();
    $("#codeCore").show();
    $("#designation").show();
    $("#devBootcamp").show();
    $("#mobileMakersAcademy").show();
    $("#starterLeague").show();
    $("#startupInstitute").show();



  }
  if (state == "You clicked: MI") {
    $(".allBootcamps div").hide();
    $("#grandCircus").show();
  }

  if (state == "You clicked: NY") {
    $(".allBootcamps div").hide();
    $("#appAcademy").show();
    $("#apprentice").show();
    $("#brainStation").show();
    $("#byteAcademy").show();
    $("#devBootcamp").show();
    $("#falitronSchool").show();
    $("#fullstackAcademy").show();
    $("#makeSchool").show();
    $("#newYorkCodeDesignAcademy").show();
    $("#recurseCenter").show();
    $("#shillingtonSchool").show();
    $("#startupInstitute").show();



  }
  if (state == "You clicked: TX") {
    $(".allBootcamps div").hide();
    $("#apprentice").show();
    $("#coderCamps").show();
    $("#coderVox").show();
    $("#codeUp").show();
    $("#devMountain").show();
    $("#theIronYard").show();
    $("#techTalentSouth").show();


}
    if (state == "You clicked: TN") {
      $(".allBootcamps div").hide();
      $("#nashvilleSoftwareSchool").show();


  }
  if (state == "You clicked: OH") {
    $(".allBootcamps div").hide();
    $("#softwareGuild").show();
    $("#weCanCodeIt").show();


}
  if (state == "You clicked: MA") {
    $(".allBootcamps div").hide();
    $("#apprentice").show();
    $("#generalAssembly").show();
    $("#launchAcademy").show();


  }
  if (state == "You clicked: PA") {
    $(".allBootcamps div").hide();
    $("#apprentice").show();
  }
  if (state == "You clicked: CO") {
    $(".allBootcamps div").hide();
    $("#apprentice").show();
    $("#davinciCoders").show();
    $("#galvanize").show();
    $("#reFactor").show();
    $("#turingSchool").show();


  }
  if (state == "You clicked: NC") {
    $(".allBootcamps div").hide();
    $("#apprentice").show();
    $("#coderFoundry").show();
    $("#craftsmenshipAcademy").show();
    $("#theIronYard").show();
    $("#techTalentSouth").show();
    $("#turnToTech").show();




  }
  if (state == "You clicked: MD") {
    $(".allBootcamps div").hide();
    $("#betamore").show();
  }
  if (state == "You clicked: GA") {
    $(".allBootcamps div").hide();
    $("#bigNerdRanch").show();
    $("#theIronYard").show();
    $("#techTalentSouth").show();

  }
  if (state == "You clicked: UT") {
    $(".allBootcamps div").hide();
    $("#CodingCampus").show();
    $("#devMountain").show();
    $("#devPointLabs").show();


  }
  if (state == "You clicked: NM") {
    $(".allBootcamps div").hide();
    $("#deepDiveCoding").show();
  }
  if (state == "You clicked: HI") {
    $(".allBootcamps div").hide();
    $("#devLeague").show();
  }
  if (state == "You clicked: MO") {
    $(".allBootcamps div").hide();
    $("#disruption").show();
  }
  if (state == "You clicked: NV") {
    $(".allBootcamps div").hide();
    $("#theIronYard").show();
  }
  if (state == "You clicked: FL") {
    $(".allBootcamps div").hide();
    $("#ironHack").show();
    $("#Wyncode").show();

  }

  if (state == "You clicked: AZ") {
    $(".allBootcamps div").hide();
    $("#rockItBootcamp").show();
  }

  if (state == "You clicked: VA") {
    $(".allBootcamps div").hide();
    $("#techTalentSouth").show();
  }


})



//$("div:contains('OR')").css("text-decoration"; "underline")









});
