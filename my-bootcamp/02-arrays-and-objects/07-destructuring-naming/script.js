/*
Destructuring and Naming

Objectives:
- Understand how to destructure objects and arrays
- Learn how to rename variables during destructuring
- Use the rest/spread operator with destructured arrays

References: 
- MDN Destructuring Assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/ 
////////////////////////////////////////////////////////////////

// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};


// Destructuring object properties
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

//rest operator collects remaining elements into an array
const [first, second, ...rest] = numbers;

console.log(first, second, rest);
