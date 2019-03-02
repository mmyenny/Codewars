//https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(Number)
}
