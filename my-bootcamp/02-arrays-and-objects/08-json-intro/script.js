/*
JSON Intro
- JSON stands for JavaScript Object Notation
- JSON is a data format that is common in data exchange
- JSON is "self-describing" and easy to understand
- JSON is language independent
- In JavaScript, we use the global objects:
  - JSON.stringify() - to convert to JSON
  - JSON.parse() - to convert to a JavaScript object

References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/JSON
- https://www.json.org/json-en.html
- https://javascript.info/json

*/ 
////////////////////////////////////////////////////////////////
const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str.id);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj.id);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
