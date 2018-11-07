function countPositivesSumNegatives(input) {
// Start with the first number
// if this is postive (more than 0)
// - add one to the count
// if this is negative
// - add the number to the sum
// if there are no more numbers, we are done, return the count and the sum (our answers)
// otherwise go the next number
// go back to step 2

// Sounds like for loop!

   // Guard clause
   if ((input === null) || (input.length === 0)) {
     return []
   }
      
   let count = 0
   let sum = 0
   
   // Common for loop for going through all the elements of an array
   for(let index = 0; index < input.length; index++) {
     let number = input[index]
     
     if (number > 0) {
       // add one to the count
       count++
     }
     
     if (number < 0) {
      // add the number to the sum
      sum = sum + number
     }
   }
   
   return [count, sum]
}
