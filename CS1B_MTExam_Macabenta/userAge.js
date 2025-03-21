// MACABENTA, VHARDEY JOHN F.
let age = parseInt(prompt("Enter your age.")); // user inputs their age

if (age < 5){ // if condition, if t returns true then...
  console.log("User is a Toddler."); // this would be printed out
}else if (age >= 5 && age <= 12){ // if statement above is false
  console.log("User is a Child."); // then this would be logged
}else if (age >= 13 && age <= 19){ // and so is all the else if below
  console.log("User is a Teenager.");
}else if (age >= 20 && age <= 35){
  console.log("User is a Young Adult.");
}else if (age >= 36 && age <= 60){
  console.log("User is a Middle-Aged.");
}else if (age > 60){
  console.log("User is a Senior.");
}else{ // if no one returns true then this woulld get executed...
  console.log("Please enter a numeric value. Try again."); // then logs its value
}

