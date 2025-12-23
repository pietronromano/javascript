/*
Binding this in Class Methods
////////////////////////////////////////////////////////////////
Objective: 
- Understand the behavior of this in class methods
- Learn how to bind this to class methods for event handling

References: 
- 

*/ 
////////////////////////////////////////////////////////////////

class App {
  constructor() {
    this.serverName = 'localhost';

    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this));
  }

  getServerName() {
    console.log(this);
  }
}

const app = new App();
