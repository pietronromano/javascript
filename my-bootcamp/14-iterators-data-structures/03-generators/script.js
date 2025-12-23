/*
Generators
A generator is a special type of function that can be paused and resumed, allowing it to produce a sequence of values over time, rather than computing them all at once and sending them back. 
Generators are defined using the function* syntax and use the yield keyword to produce values. 
When a generator function is called, it returns a generator object that conforms to both the iterable and iterator protocols.

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

*/ 
////////////////////////////////////////////////////////////////

function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

console.log(iterator.next().value); // Red Sox
console.log(iterator.next().value); // Yankees
console.log(iterator.next().value); // Astros
console.log(iterator.next().value); // Dodgers
console.log(iterator.next().done); // true

// Use with for... of
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Use with spread operator
console.log([...createTeamIterator(teams)]);

// Use with destructuring
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third);
