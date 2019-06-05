# https://www.codewars.com/kata/grasshopper-personalized-message/train/ruby

# Personalized greeting
# Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

# Use conditionals to return the proper message:

# ======= case | return --- | --- name equals owner | 'Hello boss' otherwise | 'Hello guest'

def greet(name,owner) 
  name === owner ? "Hello boss" : "Hello guest"
end