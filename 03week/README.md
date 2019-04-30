- get user input (startStack, endStack) and then check the rules of the game based on the current stack object

- whenever we want to move a number, we need to check that number and make sure that it is less than the number you are trying to place it on

- to move a numebr, we need to update the stacks object using our user input

- don't check for a win on 'a' at all (good test?)

- to determine that the game has been won, check that either 'b' or 'c' has all the numbers

- should only be able to remove a number from the end of one array and place it on the end of another array

- we can always move numbers into an empty array

- if you choose from an empty stack or one that doesn't exist, the stacks will not be updated and a message will be console logged