$(document).ready(function(){
  // Teams or Solo
  var option1 = $("#option1").val();
  // math or writting
  var option2 = $("#option2").val();
  // hot or cold
  var option3 = $("#option3").val();
  // walk or run
  var option4 = $("#option4").val();
  // warm or cold
  var option5 = $("#option5").val();

  $("#formOne").submit(function(event){
    event.preventDefault();
    // ERROR CATCHING ALL FIELDS MUST BE FILLED OUT
    if (option1 === "--"|| option2 ==="--"|| option3 ==="--"|| option4 ==="--"|| option5 ==="--") {
      $("#javascript").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#completeform").show();
      return
    }

    if (option1 === "Teams" && option2 === "math") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#python").hide();
      $("#completeform").hide();
    }

    if (option2 === "writting") {
      $("#javascript").show();
      $("#ruby").hide();
      $("#python").hide();
    } else if (option2 === "math") {
      $("#python").show();
      $("#ruby").hide();
      $("#javascript").hide();
    };

  });
});
