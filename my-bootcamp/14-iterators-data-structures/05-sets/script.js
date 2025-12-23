/*
Sets
A Set is a built-in JavaScript object that allows you to store unique values of any type, whether primitive values or object references. 
Sets are useful when you need to ensure that a collection of items does not contain duplicates. 
They provide various methods to add, delete, and check for the presence of items, as well as to iterate over the collection.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

*/ 
////////////////////////////////////////////////////////////////

const set = new Set([1, 2, 2, 3, 3, 4]);

// Add a new value to the set
set.add(5);

console.log(set);

// Check for membership
console.log(set.has(5));
console.log(set.has(6));

// Remove a value from the set
set.delete(5);

console.log(set);

// Convert to array
const array = Array.from(set);

// Convert array to set
const arraySet = new Set(array);

// Get the size of the set
console.log('Set Size:', set.size);

// Get values from the set - returns an iterator
console.log(set.values());

// Iterate through the set using a loop
for (let item of set) {
  console.log(item);
}

// use iterator
const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Clear the set
set.clear();

console.log(set);
