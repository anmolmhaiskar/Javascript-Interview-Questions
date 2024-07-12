// let user = {
//   name: "Anmol",
//   age: 26,
//   getDetails: () => {
//     console.log(this);
//   },
// };

// user.getDetails();

// const myObject = {
//   myArrowFunction: null,
//   myMethod: function () {
//     this.myArrowFunction = () => {
//       console.log(this);
//     };
//   },
// };

// myObject.myMethod(); // this === myObject

// myObject.myArrowFunction(); // this === myObject

// const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction(); // this === myObject

const obj = {
  name: "Bownie",
};

var globalScope = 20;
var close = () => {
  var scriptScope = 10;
  function internalFunc() {
    console.log(globalScope);
    console.log(scriptScope);
  }
  internalFunc();
};
console.log(this.obj);
close();
