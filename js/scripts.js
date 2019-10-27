$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
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

    // ERROR CATCHING ALL FIELDS MUST BE FILLED OUT
    if (option1 === "--" || option2 ==="--" || option3 ==="--" || option4 ==="--" || option5 === "--") {
      $("#javascript").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#completeform").show();
      return;
    }
    // TO SHOW RUBY
    if (option1 === "Teams" && option2 === "math") {
      $("#ruby").show();
      $("#javascript").hide();
      $("#python").hide();
      $("#completeform").hide();
      return;
    }
    // TO SHOW JAVASCRIPT
    if (option1 === "Solo" && option2 === "writting") {
      $("#javascript").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#completeform").hide();
      return;
    }
    // SHOW PYTHON
    if (option1 === "Teams" && option2 === "writting") {
      $("#python").show();
      $("#ruby").hide();
      $("#javascript").hide();
      $("#completeform").hide();
      return;
    };
  });
});
