# https://www.codewars.com/kata/beginner-lost-without-a-map/train/ruby

# Given an array of integers, return a new array with each value doubled.

# For example:

# [1, 2, 3] --> [2, 4, 6]

# For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

def maps(x)
  x.map{|n| n * 2}
end