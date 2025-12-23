/*
Static Methods in Classes
////////////////////////////////////////////////////////////////
Objective: 
- Learn how to define and use static methods in classes
- Understand the difference between static methods and instance methods

References: 
- 

*/ 
////////////////////////////////////////////////////////////////

class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static getClass() {
    return 'Rectangle';
  }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
console.log(Rectangle.getClass());
