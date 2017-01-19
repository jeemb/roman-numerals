// business logic
var symbolTable = { };
symbolTable['1'] = 'I';
symbolTable['5'] = 'V';
symbolTable['10'] = 'X';
symbolTable['50'] = 'L';
symbolTable['100'] = 'C';
symbolTable['500'] = 'D';
symbolTable['1000'] = 'M';

var ordersOfMagnitude = [1, 5, 10, 50, 100, 500, 1000].reverse();

var convert = function(number) {
  var result = '';
  var value = number;
  var remainder = 0;

  if (number >= 4000) {
    return '';
  }

  for (var i = 0; i < ordersOfMagnitude.length; i++) {
    var magnitude = ordersOfMagnitude[i];
    remainder = value % magnitude;
    value = Math.floor(value / magnitude);

    for (var j = 1; j <= value; j++) {
      result += symbolTable[magnitude.toString()];
    }
    value = remainder;
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
