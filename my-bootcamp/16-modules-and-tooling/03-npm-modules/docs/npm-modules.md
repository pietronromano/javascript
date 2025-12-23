# NPM modules

NPM (Node Package Manager) is the default package manager for Node.js. 
- NPM official website: https://www.npmjs.com/ for searching packages.
- NPM documentation: https://docs.npmjs.com/

## Examples of popular NPM packages:
- Lodash: A utility library for JavaScript. https://www.npmjs.com/package/lodash
- Express: A web application framework for Node.js. https://www.npmjs.com/package/express
- Axios: A promise-based HTTP client for the browser and Node.js. https://www.npmjs.com/package/axios

## Initializing a new NPM project
To create a new NPM project, navigate to your project directory in the terminal and run:
```bash
npm init
```
This command will prompt you to enter details about your project and create a `package.json` file, which contains metadata about your project and its dependencies.

---

## Installing NPM packages
To install an NPM package, use the following command in your terminal:
```bash
npm install <package-name>
``` 

---

## Our examples:
- axios:
```bash
cd my-bootcamp/13-modules-and-tooling/03-npm-modules/code/axios
npm init -y # -y flag to skip the questionnaire
npm install axios
node app.js
```

---

## Using Nodemon
Nodemon is a utility that automatically restarts your Node.js application when file changes in the directory are detected. To use Nodemon, you first need to install it locally or globally using npm:

Global installation (worked fine):
```bash
npm install -g nodemon
```

Local installation (recommended for project-specific use),
but didn't add to the path (couldn't find nodemon)
```bash
npm install --save-dev nodemon
```

Once installed, you can run your application with Nodemon instead of Node.js:
```bash
nodemon app.js
```

Or run with npm script from `package.json`:
Check your `package.json` file and add the following script if it's not already there:
```json
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
```

Then run:
```bash
npm run dev
```

