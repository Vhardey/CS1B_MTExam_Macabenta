// MACABENTA, VHARDEY JOHN F.
let favNumber = 7; // number to bbe guessed
let userGuess = " "; // empty string for our users guess

while (userGuess != favNumber){ // while loop until condition is not met
  userGuess = prompt("Guess the favorite number."); // user input and throws it at our empty string
  if (userGuess > favNumber){ // if condition
    console.log("Guess is too high."); // log if condition above is true
  }else if (userGuess < favNumber){ // if conditionn above is false then...
    console.log("Guess is too low."); // this would be logged
  }else{ // if both conditions are false, then...
    console.log("Guess is correct");// this would get logged
  }
}