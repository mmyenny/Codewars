// https://www.codewars.com/kata/twice-as-old/train/javascript

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //return the age of when the father will be or was x2 as old as son
  console.log(dadYearsOld, sonYearsOld)

  let doubleSonsAge = sonYearsOld * 2

  if (dadYearsOld >= doubleSonsAge) {
    return dadYearsOld - doubleSonsAge
  } else {
    return doubleSonsAge - dadYearsOld
  }
}
