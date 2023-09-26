function romanNumeral(string) {
  const values = [1000, 900, 500, 100, 90, 50, 10, 9, 5, 4, 1];
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = '';

  let num = parseInt(string, 10);

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}

// Example test cases
console.log(romanNumeral('I'));     // Output: "1"

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
/// The romanNumeral function takes a string input  representing a ROman numeral then converts it within  an integer. The valyes  array stores the corresponding decimal values  for each Roman numeral symbol . The symbols array stoes  the ROman numeral  symbols in the same order as their corresponding  values.
//The result variable is  intialized as an empty string  to sttore tehe converted integer. The num variable is then assigned  the integer value of  the input string using parseInt(string, 10).
//The code then iterates through the values array using a for loop. For each value, it enters a while loop as long as num is greater than or equal to the current value. Inside the while loop, it appends the corresponding symbol to the result string and subtracts the value from the num.
//Once the while loop completes, it moves to the next  value in the values array and repeats the process until all values have  been checked.
//FInally, the function returns the result  string, which represents the input Roman numeral converted to an integer.
//The illustration test cases at the end of the code demonstrate the usage of the romanNumeral function and verify if it produces the expected output. //By following this logic,the code converts Roman numerals to integers.

