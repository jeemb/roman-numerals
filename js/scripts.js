// business logic
var convert = function(number) {
  var result = '';
  var value = number;
  var remainder = 0;

  if (number >= 4000) {
    return '';
  }

  return result;
};

// user interface logic
$(document).ready(function() {
  $("#conversion").submit(function(event) {
    event.preventDefault();
    var input = $("#arabic").val();
    var output = convert(parseInt(input));

    $("#output p").text(output);
    $("#output").show();
  });
});
