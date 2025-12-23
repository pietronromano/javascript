# Modules
In Node.js, modules are a way to organize and reuse code. Each file in Node.js is treated as a separate module. 
You can export functions, objects, or values from a module and import them into other modules using the CommonJS module system.
We import modules using the `require` function. We can import built-in modules, our own custom modules,or third-party modules using npm.


## Module Systems
- CommonJS Modules is the module system used in **Node.js**. It uses `require` to import modules and `module.exports` to export them.
- ES6 Modules (ESM) is another module system and commonly used in the **Browser**. They also use `import` and `export` statements, but with a different syntiax from CommonJS modules. 


## Module bundlers
Webpack and Parcel are examples of Module Bundlers that can also be used to bundle modules for use in the browser. Frameworks like React and Vue.js also utilize modules under the hood to structure their code: so it's useful to understand how modules work in JavaScript.

Types of Modules:
1. **Built-in Modules**: Node.js comes with several built-in modules like `fs`, `http`, and `path` that provide various functionalities.
2. **Custom Modules**: You can create your own modules by exporting functions, objects, or values from a file.
3. **Third-Party Modules**: These are modules created by the community and can be installed using npm


## Exporting Modules
To export a module, you can use the `module.exports` object. Here’s an example of exporting a function from a module:
```javascript
function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amount) {
  return `$${amount}`;
}

// Exporting functions using CommonJS syntax
module.exports = {
  capitalizeWords,
  makeMoney,
};
```

## Importing Modules
To import a module, you can use the `require` function. Here’s an example of importing the above module:
```javascript
// Destructuring imports from utils.js 
const { capitalizeWords, makeMoney } = require('./utils');
```

You can also import entire modules:
```javascript
const utils = require('./utils'); 
console.log(utils.capitalizeWords('hello world')); // Output: 'Hello World'
console.log(utils.makeMoney(100)); // Output: '$100'
```

## Exporting Classes
You can also export classes from a module. Here’s an example:
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
} 
// Exporting the Person class using CommonJS syntax
module.exports = Person;
``` 
## Importing Classes
To import a class, you can use the `require` function as well:
```javascript
// Importing the Person class from Person.js
const Person = require('./Person');
const john = new Person('John', 30);
console.log(john.name); // Output: 'John'
console.log(john.age);  // Output: 30
```

# Running the Code
```js
cd my-bootcamp/13-modules-and-tooling/02-commonjs-modules/code
node app.js
``` 

## Debugging Modules with VS Code
- Open the `my-bootcamp/13-modules-and-tooling/02-commonjs-modules/code` folder in VS Code.
- Create a launch configuration for Node.js in VS Code to debug your modules:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch app.js",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/my-bootcamp/13-modules-and-tooling/02-commonjs-modules/code/app.js"
        }
    ]
}
```



- Open the `app.js` file in VS Code.
- Set breakpoints by clicking in the gutter next to the line numbers.
- Open the Debug panel by clicking on the Debug icon in the Activity Bar on the side of VS Code.
- Click on the gear icon to create a `launch.json` file if you don't have one already.
- Select "Node.js" as the environment.
- Start debugging by clicking the green play button or pressing `F5`.
