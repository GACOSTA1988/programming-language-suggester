$(document).ready(function(){
  $("form#formOne").submit(function(event){
  event.preventDefault();

  var question1 = parseInt ($("option#option1").val());
  var question2 = parseInt ($("option#option2").val());
  var question3 = parseInt ($("option#option3").val());
  var question4 = parseInt ($("option#option4").val());
  var question5 = parseInt ($("option#option5").val());

  if (question1 === "Teams") {
    $("#ruby").show();
  }

});
});
