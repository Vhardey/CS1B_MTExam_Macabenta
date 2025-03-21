// MACABENTA, VHARDEY JOHN F.
let userConfirmation = prompt("Would you like to create a grocery list (y/n)?"); // asks user if he/she wants to create a grocery list
let grocery_list = []; // empty array for our grocery

if (userConfirmation.toUpperCase() === "Y"){ //  if statement condition 
  let numItems = parseInt(prompt("Please enter the number of items to be registered in the grocery list.")); // asks of how many groceries to be inputted
  for (let i = 0; i < numItems; i++){ // for loop with the number of iteration is based on numItems variable
    grocery_list.push(prompt("Enter your groceries.")); // pushes the valued entered into our empty array
  } 
}else{ //if the condition at the top is not met then this will execute.
  console.log("Thank you. Re-run the program if you changed your mind.");// prints the value
}

let groceryList_Sort = grocery_list.toSorted(); // sort our grocery from a-z
let groceryList_Reverse = grocery_list.toSorted((a, b) => b - a); // reversed sorted our sorted grocery

alert(grocery_list); // logs the value of our original list
alert(groceryList_Sort); // logs the value of our sorted list
alert(groceryList_Reverse); // logs the value of our reverse sorted list