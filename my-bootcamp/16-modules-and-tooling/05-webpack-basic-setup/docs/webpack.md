# Webpack
Webpack takes modules with dependencies and generates static assets representing them.
It is a module bundler primarily for JavaScript, but it can transform front-end assets like HTML, CSS, and images if the corresponding loaders are included.

## References
- [Webpack Official Documentation](https://webpack.js.org/concepts/)
- [Getting Started with Webpack](https://webpack.js.org/guides/getting-started/)
- [Webpack Configuration](https://webpack.js.org/configuration/)


## Installation
To install Webpack and Webpack CLI as development dependencies, run the following command:

```bash
npm install --save-dev webpack webpack-cli
``` 

## Basic Configuration
Create a `webpack.config.js` file in the root of your project with the following basic configuration:   

```javascript
const path = require('path');
module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
```
This configuration specifies the entry point of your application and the output file and directory for the bundled code, in this case, `dist/bundle.js`.

## Running Webpack
You can run Webpack using the following command:  
```bash
npx webpack --config webpack.config.js
```
This will create a `dist` directory with the bundled `bundle.js` file.

## Build Modes
Webpack supports two build modes: `development` and `production`. You can specify the mode in the configuration file or via the command line.  
For development mode:
```bash
npx webpack --mode development
```
For production mode:
```bash
npx webpack --mode production
```

## Using package.json Scripts
You can add scripts to your `package.json` file to simplify running Webpack commands. For example:
```json
"scripts": {
  "build": "webpack --mode production",
  "start": "webpack --mode development --watch"
}
``` 
Now you can run `npm run build` to create a production build or `npm start` to start Webpack in watch mode for development.
```bash
cd my-bootcamp/13-modules-and-tooling/05-webpack-basic-setup/webpack-starter
npm run build
```