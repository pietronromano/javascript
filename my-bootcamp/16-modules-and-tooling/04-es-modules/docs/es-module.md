# ES Modules
ES Modules (ECMAScript Modules) are a standardized way to organize and share code in JavaScript - mainly used in browsers, but also supported in Node.js. 


## Key Features of ES Modules
- **Import and Export**: ES Modules use the `import` and `export` keywords to share code between files.
- **Static Structure**: The structure of ES Modules is static, meaning that imports and exports are determined at compile time, allowing for better optimization by tools and bundlers.
- **File-Based**: Each ES Module is typically contained in its own file, and the file extension is usually `.js` or `.mjs`.
- **Strict Mode**: ES Modules automatically operate in strict mode, which helps catch common coding errors and improves performance.


## Examples

### HTMLScript Tag 
- ES Modules require the `type="module"` attribute in the `<script>` tag.
```html
<script type="module" src="app.js"></script>
```
---

### Exporting from a Module
```javascript
// utils.js
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}    
export function makeMoney(amount) {
  return `$${amount.toFixed(2)}`;
}    
```

### Importing into Another Module
```javascript
// app.js: need the .js extension when importing local modules
import { capitalizeWords, makeMoney } from './utils.js';
const title = capitalizeWords('hello world');
const price = makeMoney(19.99);
console.log(title); // Output: Hello World
console.log(price); // Output: $19.99
```
## Using Default Exports
You can also export a single value as the default export of a module.
### Default Export Example
```javascript
// math.js
export default function add(a, b) {
  return a + b;
}
```
```javascript
// app.js
import add from './math.js';
const sum = add(5, 10);
console.log(sum); // Output: 15
```
