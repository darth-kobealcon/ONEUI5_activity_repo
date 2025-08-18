var height = 5;

for (let i = 0; i < height; i++) {
  let line = '';

  for (let j = 0; j < height; j++) {
    if (j === i || j === height - 1 - i) {
      line += '*';
    } else {
      line += ' ';
    }
  }

  console.log(line);
}
