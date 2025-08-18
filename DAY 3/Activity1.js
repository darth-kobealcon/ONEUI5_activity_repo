function numberToWords(number) {
    if (number < 1 || number > 999) {
        return "Invalid input. Please enter a number between 1 and 999.";
    }
 
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
                   "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
 
    let word = "";
 
    if (number >= 100) {
        word += ones[Math.floor(number / 100)] + " Hundred";
        number %= 100;
        if (number > 0) word += " ";
    }
 
    if (number >= 20) {
        word += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) word += " ";
    } else if (number >= 10) {
        word += teens[number - 10];
        number = 0;
    }
 
    if (number > 0 && number < 10) {
        word += ones[number];
    }
 
    return word;
}
 
var number = 69;
console.log(numberToWords(number));