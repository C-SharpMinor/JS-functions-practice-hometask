// JavaScript Home Task: Functions
// Instructions
// Create a folder named javascript-functions-practice.
// Inside it, create index.html and script.js.
// Connect script.js to index.html.
// Complete all tasks in script.js, using comments to number and separate your answers.
// Use the browser console to check your results.
// Where a task asks you to return a value, use return inside the function and display the result outside it.
// Revise your class notes and be ready to explain your code.
// Upload your assignment to a GitHub repository with a relatable name like javascript-functions-practice.
// Use a meaningful commit message and share your GitHub repository link for review.

// 1. Create and Reuse a Function
// Create a function declaration named displayReminder.
// Inside it, display "Remember to practise JavaScript every day!".
// Call the function three times.

function displayReminder (){
    console.log("Remember to practise JavaScript every day!")
}
displayReminder ();
displayReminder ();
displayReminder ();


// 2. Use a Parameter
// Create a function declaration named welcomeLearner with a parameter named learnerName.
// Display "Welcome, [learnerName]!" using a template literal.
// Call it with "Amina" and then "David".
// Pass each name directly as an argument; you do not need to declare name variables outside the function.

function welcomeLearner (learnerName){
    console.log(`Welcome, ${learnerName}!`)
}
welcomeLearner("Amina")
welcomeLearner("David")

// 3. Use Multiple Parameters
// Create a function declaration named describeProduct with two parameters: productName and price.
// Display a message such as "A Notebook costs ₦1500.".
// Call it with "Notebook" and 1500.
// Call it again with "School Bag" and 12000.
// Supply the arguments in the correct order.

 function describeProduct (productName, price){
    console.log(`A ${productName} costs ₦${price}`)
 }

describeProduct("Notebook", 1500)
describeProduct("School Bag", 1200)

// 4. Set a Default Parameter
// Create a function declaration named showCity with a parameter named city.
// Give city a default value of "Lagos".
// Inside the function, display "Your selected city is [city].".
// Call it without an argument.
// Call it with "Abuja".
// Call it with undefined.

function showCity (city="Lagos"){
    console.log(`Your selected city is ${city}.`)
}

showCity()
showCity ("Abuja")
showCity("PH", "shs")

// In a comment, explain when the default value is used.
// the default value is used when no argument is used in the function parameter

// 5. Return and Reuse a Result
// Create a function declaration named calculateSubtotal with parameters price and quantity.
// Return price * quantity.
// Call it with 2500 and 4.
// Store the returned value in a variable named subtotal.
// Display subtotal.
// Add a delivery fee of 1500 to subtotal and display the final total.

function calculateSubtotal(price, quantity){
    return price * quantity;
}
const subtotal= calculateSubtotal(2500, 4);
console.log(subtotal);
const finalTotal= subtotal + 1500
console.log(finalTotal);


// 6. Return a Decision
// Create a function declaration named checkPass with a parameter named score.
// If score is below 50, return "Try again.".
// After the if block, return "You passed!".
// Do not use else.
// Call the function with 35, 50 and 80, displaying each returned result.

function checkPass (score){
    if (score<50) 
        return "Try again";
    return "You passed!";
}

console.log(checkPass(35))
console.log(checkPass(50))
console.log(checkPass(80))

// 7. Return a Boolean
// Create a function declaration named isPositive with a parameter named number.
// Return true if the number is greater than 0.
// Otherwise, return false.
// Display the returned results for 8, -3 and 0.

function isPositive(number){
    if(number>0)
        return true;
    return false;
}

isPositive(8)
isPositive(-3)
isPositive(0)

// 8. Create a Function Expression
// Create a function expression and assign it to a constant named displayStudyTip.
// Inside it, display "Practise a little every day.".
// Call the function twice.

const displayStudyTip = function (){
    console.log("Practice a little every day.");
    
}
displayStudyTip()
displayStudyTip()


// 9. Calculate with a Function Expression
// Create a function expression and assign it to a constant named calculateBalance.
// Give it two parameters: amountPaid and totalCost.
// Return amountPaid - totalCost.
// Call it with 10000 and 7500.
// Store the returned value in balance and display it.

const calculateBalance= function (amountPaid, totalCost){
    return amountPaid - totalCost;

}

const balance = calculateBalance(10000, 7500);
console.log(balance);

// 10. Create an Arrow Function
// Create an arrow function and assign it to a constant named introduceLearner.
// Give it two parameters: learnerName and courseName.
// Display "[learnerName] is studying [courseName].".
// Call it with "Bola" and "JavaScript".

const introduceLearner = (learnerName, courseName)=>{
    console.log(`${learnerName} is studying ${courseName}.`);
    
}

// 11. Use an Implicit Return
// Create an arrow function named squareNumber.
// Give it one parameter named number.
// Use an implicit return to return number * number.
// Do not use curly braces or the return keyword.
// Display the results of calling it with 5 and 9.

const squareNumber = (number)=> number * number
squareNumber(5)
squareNumber(9)

// 12. Use an Explicit Return
// Create an arrow function named calculateDiscount.
// Give it two parameters: price and discountAmount.
// Use curly braces and the return keyword to return price - discountAmount.
// Call it with 8000 and 1000.
// Store the returned value in discountedPrice and display it.

const calculateDiscount = (price, discountAmount)=>{
    return price - discountAmount;
}

const discountedPrice= calculateDiscount (8000, 1000)
console.log(discountedPrice);

// 13. Practice All Three Function Styles
// Write three functions that each accept two numbers and return their product:
// A function declaration named multiplyDeclaration.
// A function expression assigned to multiplyExpression.
// An arrow function assigned to multiplyArrow, using an implicit return.
// Call each function with 6 and 4, displaying each result.

function multiplyDeclaration (no1, no2){
 return no1 * no2;
}
const multiplyExpression = function (no1, no2){
    return no1 * no2;
}
const multiplyArrow = (no1, no2)=> no1 * no2;

multiplyDeclaration(6,4)
multiplyExpression(6,4)
multiplyArrow(6,4)

// 14. Explore Hoisting
// Write a call to showMessage() above its function declaration.
// Below the call, declare showMessage and make it display "Function declarations can be called before their definition.".
// Run your code.

showMessage()
const showMessage = ()=>{
    console.log("Function declarations can be called before their definition.");
    
}

// Explain in a comment why the call works.
// This works because before the browser executes the code line-by-line, the JavaScript engine does an initial "parsing" pass over the entire file. 
// During this first pass, it actively hunts for all formal function declarations and essentially pulls them up (hoists them) to the very top of the computer's memory for that scope.
//By the time the engine actually starts executing the code from top to bottom, it already knows exactly what and where that function is, even if the physical line of code is written at the very bottom of the file.

// 15. Compare Displaying and Returning
// Create these two function declarations:
// displayDouble(number): displays number * 2 using console.log() but has no return statement.
// returnDouble(number): returns number * 2.
// Then:
// Call displayDouble(5) and store its returned value in firstResult.
// Call returnDouble(5) and store its returned value in secondResult.
// Display firstResult and secondResult.
// Explain in a comment why firstResult contains undefined, even though the first function displayed 10.

function displayDouble(number) {
    console.log(number * 2);
}
function returnDouble(number){
    return number * 2;
}

const firstResult= displayDouble(5);
const secondResult= returnDouble(5);

//firstResult shows undefined because it does not return a value to be displayed. The function was instructed to display some result
//while for secondResult, it does return a value. So the value could be stored in a variable and then displayed