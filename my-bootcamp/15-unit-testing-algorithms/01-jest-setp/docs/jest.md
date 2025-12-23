# Setup

References:
- https://jestjs.io/docs/getting-started


- Initialize a new Node.js project and install Jest as a development dependency:
- NOTE: need to install jsdom separately: https://github.com/jestjs/jest/issues/15888

```bash
cd my-bootcamp/15-unit-testing-algorithms/01-jest-setp/algo-testing
npm init -y
npm install --save-dev jest
npm install --save-dev jest-environment-jsdom
```

Change package.json to add a test script::
```json
"scripts": {
  "test": "jest"
}
```
Now you can run your tests using::
```bash
npm test
```
