/*
Object Challenge

Instructions:

1. Create an array named `library` that contains three objects. Each object should represent a book and have the following properties:
   - `title` (string)
   - `author` (string)
   - `status` (object) with the following boolean properties:
     - `own`
     - `reading`
     - `read`

2. Update the `status` of each book in the `library` array to indicate that you have read all three books.

3. Use object destructuring to extract the title of the first book in the `library` array and log it to the console.

4. Convert the entire `library` array into a JSON string and log it to the console.

References: 
- 

*/ 
////////////////////////////////////////////////////////////////

// Step 1
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Mockingjay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
