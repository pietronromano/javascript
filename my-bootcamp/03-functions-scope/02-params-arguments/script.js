/*
Parameters & Arguments

Parameters are the names listed in the function definition.
Arguments are the real values passed to (and received by) the function.

- You can pass any type of data as arguments to functions:
  - Primitives (string, number, boolean, null, undefined)
  - Objects
  - Arrays
  - Functions

- You can also use:
  - Default parameters
  - Rest parameter


References:
- MDN Function Parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters
- MDN Rest Parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- MDN Default Parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

*/ 
////////////////////////////////////////////////////////////////

// Default Params
function registerUser(user = 'Bot') {
  // Old way - before using `=`
  // if (!user) {
  //   user = 'Bot';
  // }

  return user + ' is registered';
}
// No argument passed, so default value 'Bot' is used
console.log(registerUser());

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


/*
**Rest Parameters**
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
The first argument is mapped to a and the second to b, so these named arguments are used as normal.
However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth, …, nth — as many arguments as the user specifies.
*/
function myRestFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myRestFun("one", "two", "three", "four", "five", "six");

//Primitive types as params: sent by value, not by reference
// Changes made to the parameters inside the function do not affect the original arguments
function changeParamVals(a, b) {
  a = 10; // This change will not affect the original variable 'a'
  b = 20; // This change will not affect the original variable 'b'
  console.log('Inside function - a:', a); // a *10
  console.log('Inside function - b:', b); // b *20
}

let a = 5;
let b = 10;
changeParamVals(a, b);
console.log('Outside function - a:', a); //
console.log('Outside function - b:', b); //



// Objects as params
function loginUser(user) {
  user.loggedIn = true; // Modify the user object to set loggedIn to true
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John',
  loggedIn: false
};

console.log(loginUser(user));


// Calling the function with a new object
console.log(
  loginUser({
    id: 2,
    name: 'Sara',
    loggedIn: false
  })
);

/* 
**Object destructuring as params**
Destructuring the user object directly in the function parameters
Makes sending many parameters easier, does not depend on the order of parameters
*/
function logoutUser({ name, id }) {
  return `The user ${name} with the id of ${id} is logged out`;
}

console.log(logoutUser(user));

