"use stric";

// this in global scope
console.log(this); // globalObject -window, global

// this inside a function
function func() {
  console.log(this);
}

// this inside non-strict mode - (this substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject

//only in non strict mode
// this keyword value depends on how the function is called (window)

func(); // O/P : undefined (strict mode) / window (non-strict mode)

window.func(); // O/P: window

//this inside object method
// Def METHOD: if a function belongs to a object then that function is called the method of the object

// inside a method the value of "this" keyword is the object to which that method belongs
// in below example the method x belongs to object obj and since it is called like obj.x() the value of this inside function x refers to obj
const obj = {
  a: 10,
  x: function () {
    console.log(this); //obj
    console.log(this.a); //10
  },
};

obj.x();

// call apply and bind methods (sharing methods)

//this inside arrow functions
const obj1 = {
  a: 10,
  x: () => {
    console.log(this);
  },
};

obj1.x(); //window

const obj2 = {
  a: 10,
  x: function () {
    // enclosing lexical context
    const y = () => {
      console.log(this);
    };
    y();
  },
};

obj1.x(); //obj2

// this inside DOM elements => reference to HTML elements

// Why this is Different in innerFunction
// Function Context: In JavaScript, each function has its own execution context. When a function is called as a standalone function (not as a method of an object), this does not inherit from the outer function. Instead, this is set based on the rules of the function call:
// In non-strict mode, this is the global object (window in browsers).
// In strict mode, this is undefined.

const person = {
  name: "John",
  greet: function () {
    console.log(this.name); // 'John'
    function innerFunction() {
      console.log(this.name); // undefined or error in strict mode
    }
    innerFunction();
  },
};

person.greet();
