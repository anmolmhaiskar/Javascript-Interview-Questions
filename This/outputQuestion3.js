// Question: What is the output?
const a = 10;
const user = {
  firstName: "Anmol",
  getName() {
    console.log(this.firstName);
  },
};

// user is not present in scope and user.getName function code is as it is copied in setTimeout
// without any reference to the lexical scope hence when setTimeout executes the code
setTimeout(user.getName, 1000); // undefined..

// To fix above issue we can do this

// Here xyz forms closure with external env hence it has reference to user object
// NOTE: we can also use arrow function Here
setTimeout(function xyz() {
  user.getName;
}, 1000); //Anmol
