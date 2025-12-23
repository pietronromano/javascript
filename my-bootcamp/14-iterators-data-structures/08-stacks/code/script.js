/*
Stacks
A stack is a linear data structure that follows the Last In First Out (LIFO) principle, meaning that the last element added to the stack will be the first one to be removed. 
Stacks are commonly used in programming for tasks such as function call management, expression evaluation, and backtracking algorithms. 
They provide basic operations like push (to add an item), pop (to remove the top item), peek (to view the top item without removing it), and methods to check if the stack is empty or to get its size.


References: 
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

*/ 
////////////////////////////////////////////////////////////////

class Stack {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }

    const item = this._items[this._count - 1];
    this._count--;

    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return 'No items in stack';
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }

  length() {
    return this._count;
  }

  clear() {
    this._items = [];
    this._count = 0;
  }
}

const stack = new Stack();

stack.push('Item 1');
stack.push('Item 2');
stack.push('Item 3');
stack.push('Item 4');
stack.push('Item 5');

stack.pop();
stack.pop();

// stack.clear();

console.log('Top Item: ', stack.peek());
console.log('Stack Length: ', stack.length());
