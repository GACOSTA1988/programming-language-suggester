$(document).ready(function(){
  $("form#formOne").submit(function(event){
  event.preventDefault();

  var option1 = $("#option1").val();
  var option2 = $("#option2").val();
  var option3 = $("#option3").val();
  var option4 = $("#option4").val();
  var option5 = $("#option5").val();

  option1 = $("select#option1");
  option2 = $("select#option2");
  option3 = $("select#option3");
  option4 = $("select#option4");
  option5 = $("select#option5");

  if (option1 === "Teams"); {
    $("#ruby").show();
  }

});
});
