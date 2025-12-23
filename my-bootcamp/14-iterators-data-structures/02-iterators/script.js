/*
Iterators
An iterator is an object that enables a programmer to traverse a container, particularly lists. 
In JavaScript, an iterator is an object that implements a next() method, which returns an object with two properties: value and done. 
The value property contains the next value in the sequence, while the done property is a boolean indicating whether the end of the sequence has been reached.

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols 

*/ 
////////////////////////////////////////////////////////////////

// const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true };
//     }

//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   },
// };

// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());
// console.log(app.next());

const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

for (const team of app) {
  console.log(team);
}
