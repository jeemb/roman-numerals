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
