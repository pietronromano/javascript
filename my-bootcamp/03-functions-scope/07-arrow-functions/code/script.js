/*
Arrow Functions

Arrow functions provide a more concise syntax for writing functions in JavaScript. 
They are especially useful for short functions and callbacks.

Key Features:
1. Concise Syntax: Arrow functions use the `=>` syntax, which can make code shorter and cleaner.
2. Implicit Return: If the function body contains a single expression, you can omit the curly braces and the `return` keyword.
3. Lexical `this`: Arrow functions do not have their own `this` context; they inherit `this` from the surrounding scope. (SEE SECTION BELOW, ARROW FUNCTIONS HAVE NO THIS)

References: 
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- JavaScript Info: https://javascript.info/arrow-functions

*/ 
////////////////////////////////////////////////////////////////

//  Normal function declaration
function add(a, b) {
  return a + b;
}

// Arrow function syntax
const add2 = (a, b) => {
  return a + b;
};

// Implicit Return
const subtract = (a, b) => a - b;

// Can leave off () with a single param
const double = (a) => a * 2;
const double2 = a => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

// Normal function in a callback
numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback, multiple lines with explicit return
numbers.forEach((n) => {
  console.log(n);
  return n;
});

// Arrow function in a callback, one liner with implicit return
numbers.forEach((n) => console.log(n));


console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(10));
console.log(createObj());

////////////////////////////////////////////////////////////////////////
/*
Arrow functions have no “this”
SEE: https://javascript.info/arrow-functions
If this is accessed, it is taken from the outside.
For instance, we can use it to iterate inside an object method:
*/
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};

group.showList();
/*
Here in forEach, the arrow function is used, so this.title in it is exactly the same as in the outer method showList. That is: group.title.
If we used a “regular” function, there would be an error:
*/
let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student);
    });
  }
};
group2.showList();
//The error occurs because forEach runs functions with this=undefined by default, so the attempt to access undefined.title is made.
//That doesn’t affect arrow functions, because they just don’t have this.

