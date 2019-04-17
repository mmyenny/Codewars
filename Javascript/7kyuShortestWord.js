// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  s = s.split(' ')

  let shortest = s[0]

  for (i = 0; i < s.length; i++) {
    if (shortest.length > s[i].length) {
      shortest = s[i]
    }
  }
  return shortest.length
}
