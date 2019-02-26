// https://www.codewars.com/kata/square-n-sum/train/javascript

// Complete the square sum method so that it squares each number passed into it and then sums the results together.

// For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let squareNum = numbers
    .map(num => num ** 2)
    .reduce((acc, cur) => acc + cur, 0)
  return squareNum
}
