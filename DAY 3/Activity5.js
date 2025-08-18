const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];
 
for (let i = 0; i < color.length; i++) {
  let suffix;
 
  // Determine the correct ordinal suffix
  if (i + 1 >= 11 && i + 1 <= 13) {
    suffix = o[0]; // "th" for 11th, 12th, 13th
  } else {
    switch ((i + 1) % 10) {
      case 1: suffix = o[1]; break; // "st"
      case 2: suffix = o[2]; break; // "nd"
      case 3: suffix = o[3]; break; // "rd"
      default: suffix = o[0];       // "th"
    }
  }
 
  console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
}