var height = 5;
var i = 0;

while (i < height) {
  var spaces = '';
  var j = 0;
  while (j < i) {
    spaces += '  ';
    j++;
  }

  var stars = '';
  var k = 0;
  while (k < height - i) {
    stars += '* ';
    k++;
  }

  console.log(spaces + stars.trim());
  i++;
}
